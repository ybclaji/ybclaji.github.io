## 搭建Docker Registry2.0
Docker Hub是Docker官方维护的公共镜像注册中心，
用户可以推送自己的镜像到其中的面粉仓库，Docker Registry
是自己搭建的私有的镜像注册中心
### Docker Registy2.0搭建
```
docker run -d -p 5000:5000 --restart=always --name registry2 registry:2
```
如果遇到镜像下载不来，需要修改/etc/docker/daemon.json添加registry-mirrors键值，
重启docker服务
```
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```
### 开放远程api访问
```
vi /usr/lib/systemd/system/docker.service
```
需要修改的部分<br>
```shell
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```
修改后<br>
```shell
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock

```
### 支持http上传镜像
```
echo '{ "insecure-registries":["192.168.1.149:5000"] }' > /etc/docker/daemon.json
```
### 开启防火墙
```
firewall-cmd --zone=public --add-port=2375/tcp --permanent
firewall-cmd --reload
```
### 重启服务
```
systemctl stop docker
systemctl start docker
```
