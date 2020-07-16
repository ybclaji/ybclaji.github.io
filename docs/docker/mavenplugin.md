## 使用Maven构建Docker镜像
### 添加插件依赖
```
<plugin>
    <groupId>com.spotify</groupId>
    <artifactId>docker-maven-plugin</artifactId>
    <version>1.1.0</version>
    <executions>
        <execution>
            <id>build-image</id>
            配置构建镜像
            <phase>package</phase>
            <goals>
                <goal>build</goal>
            </goals>
        </execution>
    </executions>
    <configuration>
    镜像名
        <imageName>mall-tiny/${project.artifactId}:${project.version}</imageName>
        打包后上传到的服务器地址
        <dockerHost>http://192.168.1.149:2375</dockerHost>
        该应用所依赖的基础镜像
        <baseImage>java:8</baseImage>
        容器启动时执行的命令
        <entryPoint>["java", "-jar","/${project.build.finalName}.jar"]
        </entryPoint>
        <resources>
            <resource>
            打包后资源文件目录
                <targetPath>/</targetPath>
                需要复制的文件所在目录，比如maven打包的应用在target目录
                <directory>${project.build.directory}</directory>
                需要复制的文件，jar包
                <include>${project.build.finalName}.jar</include>
            </resource>
        </resources>
    </configuration>
</plugin>
```
### 修改application.yml
docker容器之间可以通过指定号的服务名称进行访问，服务名称在运行容器时指定<br>
```
spring:
  datasource:
    url: jdbc:mysql://db:3306/test?useUnicode=true&characterEncoding=utf-8&serverTimezone=Asia/Shanghai
    username: root
    password: 123456
```
### 使用maven 的package进行打包构建
打包完毕，查看镜像<br>
```
docker images
```
## 运行项目
### 启动mysql服务
```
docker run -p 3306:3306 --name mysql \
-v /mydata/mysql/log:/var/log/mysql \
-v /mydata/mysql/data:/var/lib/mysql \
-v /mydata/mysql/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=123456  \
-d mysql:5.7
```
### 进入mysql容器
```
docker exec -it mysql /bin/bash
```
### 配置mysql
- 打开客户端
`mysql -uroot -p123456 --default-character-set=utf8`
- 修改账号权限
`grant all privileges on *.* to 'root'@'%'`
- 创建数据库
`create database test character set utf8`
- 拷贝sql文件
`docker cp /mydata/test.sql mysql:/`
- 导入sql文件
```
use test;
source /test.sql
```
### 启动服务
```
docker run -p 8080:8080 --name test \
--link mysql:db \
-v /etc/localtime:/etc/localtime \
-v /mydata/app/test/logs:/var/logs \
-d test/test:0.0.1-SNAPSHOT

```
- 开启端口
```
firewall-cmd --zone=public --add-port=8080/tcp --permanent
firewall-cmd --reload
```
- 访问测试
`http://192.168.1.149:8080/swagger-ui.html`