var express = require('express');

module.exports = function() {
    var app = express();

    require('../app/routes/message.server.routes.js')(app);

    //设置静态文件服务功能（放在路由中间件下方，I/O操作耗时）
    app.use(express.static('./public'));

    return app;
}