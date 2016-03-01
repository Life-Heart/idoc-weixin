var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CollegeSchema = new Schema({
    collegeName: String
});

mongoose.model('College', CollegeSchema);