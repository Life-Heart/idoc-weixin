var Course = require('mongoose').model('Course');

exports.list = function(req, res, num, next) {
    var college = require('./colleges.server.controller.js');
    college.list(req, res, function(data) {
        if(data.length>num){
            Course.find({courseBelongs: data[num]._id}, function(err, courses) {
                if(err){
                    console.log(err);
                }else{
                    next(courses, num);
                }
            });
        }
    });
};