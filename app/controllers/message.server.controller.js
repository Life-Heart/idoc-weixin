exports.list = function(req, res, next) {
    var message = req.weixin;
    
    function warning(req, res) {
        var college = require('./colleges.server.controller.js');
        college.list(req, res, function(data) {
            var replyStr = '请按照规则回复,请选择学院';
            for(i=0;i<data.length;i++){
                replyStr += '\n'+i+'.'+data[i].collegeName;
            }
            res.reply(replyStr);
        });
    }
    //关注后返回信息
    if((message.MsgType == 'event') && (message.Event == 'subscribe')) {
        var college = require('./colleges.server.controller.js');
        college.list(req, res, function(data) {
            var replyStr = '感谢您的关注,请选择学院';
            for(i=0;i<data.length;i++){
                replyStr += '\n'+i+'.'+data[i].collegeName;
            }
            res.reply(replyStr);
        });
    }

    if(message.MsgType == 'text'){
        if(message.Content.indexOf('-') !== -1){
            var nums = message.Content.split('-');
            var document = require('./documents.server.controller.js');
            document.list(req, res, nums[0], nums[1], function(data) {
                var replyStr = '考卷列表';
                for(var i=0;i<data.length;i++){
                    replyStr += '\n'+'<a href="'+data[i].link+'">'+data[i].title+'</a>';
                    if(i === 20) {
                         replyStr += '\n'+'<a href="http://idoc.duohuo.org/">点击进入web页面查看更多考卷</a>';
                         break;
                    }
                }
                res.reply(replyStr);
            });
        }else if(!isNaN(parseInt(message.Content))) {
            var course = require('./courses.server.controller.js');
            course.list(req, res, message.Content, function(data, num) {
                var replyStr = '请选择课程';
                for(var i=0;i<data.length;i++){
                    replyStr += '\n'+num+'-'+i+'.'+data[i].courseName+'('+data[i].count+')';
                }
                res.reply(replyStr);
            });
        }else{
            warning(req, res);
        }
    }
};