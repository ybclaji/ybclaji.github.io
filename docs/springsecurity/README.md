---
title:Spring Security
---

## 初识
应用程序的安全性通常体现在两个方面：认证和授权，
认证是确认某主体在某系统中是否合法、可用的过程，
授权是指当主题通过认证之后，是否允许其执行某项操作的过程
### 支持的认证技术
- Http basic authentication headers
- http digest authentication headers
- http x.509 client certificate exchange
- LDAP
- Form-based authentication
- OpenID authentication
- Authentication based on pre-established request headers
- Jasig Central Authentication Service:单点登录
- Transparent authentication context propagation for Remote Method Invocation and HttpInvoker
- Automatic "remember-me" authentication
- Anonymous authentication
- Run-as authentication
- Java Authentication and Authorization Sercice
- java EE container authentication
- Kerberos
### 支持的授权
- 基于url对web的请求授权
- 方法访问授权
- 对象访问授权