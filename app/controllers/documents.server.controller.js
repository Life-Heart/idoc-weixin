var Document = require('mongoose').model('Document');

exports.list = function(req, res, num, courseNum, next) {
    var course = require('./courses.server.controller.js');
    course.list(req, res, num, function(courses, num) {
        if(courses.length > courseNum){
            Document.find({
                belongs: courses[courseNum].courseBelongs,
                course: courses[courseNum]._id
            }, function(err, documents) {
                if(err){
                    console.log(err);
                }else{
                    next(documents);
                }
            });
        }
    });

};