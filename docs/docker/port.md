## 修改运行中容器端口映射
在docker run创建并运行容器的时候，可以通过-p指定端口映射规则。但是，我们经常会遇到刚开始忘记设置端口映射或者设置错了需要修改。当docker start运行容器后并没有提供一个-p选项或设置，让你修改指定端口映射规则。那么这种情况我们该怎么处理呢？今天Docker君教你如何修改运行中的docker容器的端口映射？
### 删除原有容器，重新建新容器
这个解决方案最为简单，把原来的容器删掉，重新建一个。当然这次不要忘记加上端口映射，
> 优缺点：优点是简单快捷，在测试环境使用较多。缺点是如果是数据库镜像，那重新建一个又要重新配置一次，就比较麻烦了。
### 修改容器配置文件，重启docker服务
容器的配置文件路径：

`/var/lib/docker/containers/[hash_of_the_container]/hostconfig.json`
文件中其中有一项是PortBindings，其中8080/tcp对应的是容器内部的8080端口，HostPort对应的是映射到宿主机的端口9190。8361/tcp对应的是容器内部的8361端口，HostPort对应的是映射到宿主机的端口9191。按需修改端口，然后重启docker服务，再启动容器服务就可以了。
### 利用docker commit新构镜像
docker commit：把一个容器的文件改动和配置信息commit到一个新的镜像。这个在测试的时候会非常有用，把容器所有的文件改动和配置信息导入成一个新的docker镜像，然后用这个新的镜像重起一个容器，这对之前的容器不会有任何影响<br>
- 停止docker容器
`
docker stop container01
`
- commit该docker容器

`docker commit container01 new_image:tag
`
- 用前一步新生成的镜像重新起一个容器

`docker run --name container02 -p 80:80 new_image:tag
`
> 优缺点：这种方式的优点是不会影响统一宿主机上的其他容器，缺点是管理起来显得比较乱，没有第二种方法那么直观。