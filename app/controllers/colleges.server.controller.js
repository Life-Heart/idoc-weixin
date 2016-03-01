var College = require('mongoose').model('College');

exports.list = function(req, res, next) {
    College.find({}, function(err, colleges) {
        if(err){
            console.log(err);
        }else{
            next(colleges);
        }
    });
};