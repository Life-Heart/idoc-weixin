var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DocumentSchema = new Schema({
    title: String,
    belongs: String,
    course: String,
    link: String
});

mongoose.model('Document',DocumentSchema);