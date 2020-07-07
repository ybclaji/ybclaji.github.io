## docker容器内用vi
### 进入docker
通过nsenter进入docker（保存一下脚本到得到nsenter.sh文件中）
```
dockerPid=`docker inspect -f {{.State.Pid}} $1`
nsenter --target  ${dockerPid}  --mount --uts --ipc --net --pid
```
再执行
`sh nsenter.sh [容器id或者名称]`
即可进入docker容器中
### 更新软件包
```
apt-get update
```
### 安装vi
```
apt-get install vi
```