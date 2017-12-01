const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const routers = require('./routers/index');
const convert = require('koa-convert');
const koaLogger = require('koa-logger');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const flashSimple = require('koa-flash-simple');

const app = new Koa();
//sesstion存储配置
const sessionMysqlConfig = {
  user: 'root',
  password: '',
  database: 'session',
  host: 3306,
};
// 配置session中间件
// 存放sessionId的cookie配置
let cookie = {
  maxAge: 60*60*1000*1000, // cookie有效时长
  path: '/', // 写cookie所在的路径
};
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig),
  cookie:cookie
}));
// 配置控制台日志中间件
app.use(convert(koaLogger()));

// 配置ctx.body解析中间件
app.use(bodyParser());

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());
app.listen(3000);
