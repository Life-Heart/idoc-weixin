var config = require('./config'),
        mongoose = require('mongoose');
module.exports = function() {
    var db = mongoose.connect(config.db);

    require('../app/models/college.server.model');
    require('../app/models/course.server.model');   
    require('../app/models/document.server.model');   

    return db;
};