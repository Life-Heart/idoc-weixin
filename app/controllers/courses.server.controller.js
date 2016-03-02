var Course = require('mongoose').model('Course');

exports.list = function(req, res, num, next) {
    var college = require('./colleges.server.controller.js');
    college.list(req, res, function(data) {
        if(data.length>num){
            Course.find({courseBelongs: data[num]._id}, function(err, courses) {
                if(err){
                    console.log(err);
                }else{
                    var document = require('./documents.server.controller.js');
                    var i = 0;
                    function callback() {
                        if(i === courses.length) {
                            next(courses, num);
                        }
                    };
                    courses.forEach(function(course) {
                        document.count(req, res, course, function(count) {
                            course.count = count;
                            i++;
                            callback();
                        });
                    });
                }
            });
        }
    });
};