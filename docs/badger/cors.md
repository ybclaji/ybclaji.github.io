## 跨域方案
基于浏览器的同源策略,非同源脚本不可访问其他源下的资源,想要访问就需要跨域,
w3c提出跨域解决方案即cors,后端服务器实现cors接口实现跨域访问
### cors实现
config下新建Cors配置类
```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**")    //允许跨域访问的路径
                .allowedOrigins("*")  //允许访问的源地址
                .allowedMethods("POST", "GET", "PUT", "OPTIONS", "DELETE") //允许的方法
                .maxAge(168000) //预检间隔时间
                .allowCredentials(true);//是否发送cookie
    }
}
```
