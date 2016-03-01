var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CourseSchema = new Schema({
    courseBelongs: String,
    courseName: String
});

mongoose.model('Course', CourseSchema);