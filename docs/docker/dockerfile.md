## Dockerfile构建镜像
使用dockerfile构建镜像，不需要自建Registry镜像仓库，只需要应用的jar包和Dockerfile文件
### 编写Dockerfile文件
```
# 该镜像需要依赖的基础镜像
FROM java:8
# 将当前目录下的jar包复制到docker容器的/目录下
ADD test.jar /test.jar
# 运行过程中创建一个test.jar文件
RUN bash -c 'touch /test.jar'
# 声明服务运行在8080端口
EXPOSE 8080
# 指定docker容器启动时运行jar包
ENTRYPOINT ["java", "-jar","/test.jar"]
# 指定维护者的名字
MAINTAINER macrozheng
```
### 使用maven打包应用
使用package打包后，将jar包和Dockerfile文件长传到linux服务器
### 在linux上构建镜像
在Dockerfile所在目录执行 
```
# -t 表示指定镜像仓库名称/镜像名称:镜像标签 .表示使用当前目录下的Dockerfile
docker build -t mall-tiny/test:0.0.1-SNAPSHOT .
```