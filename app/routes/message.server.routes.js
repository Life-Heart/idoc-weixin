var wechat = require('wechat');
var message = require('../controllers/message.server.controller.js');

module.exports = function(app) {
    app.use('/wechat', wechat('duohuo', message.list));
};