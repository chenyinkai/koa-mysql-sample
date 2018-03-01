# koa-mysql-sample

> 基于 koa + mysql 实现的登录，注册:smile::smile::smile:

### 项目目录 

    -lib
        -default.js  // 数据库配置
        -mysql.js  // 连接数据库等一些方法
    -route
        -index.js  // 路由
    -static
    -views
        -index.html  // 主页
        -login.html  // 登录
        -register.html  // 注册
    -app.js  // 入口文件

### 测试

```bash
git clone https://github.com/chenyinkai/koa-mysql-sample.git

cd koa-mysql-sample

npm install

node app.js  // 打开 [http://localhost:3000](http://localhost:3000)
```

**注意**

    * 测试之前先配置 【lib】-> 【default.js】中的数据库信息