var mongoose = require('mongoose');
var mongoConfig = require('../config/mongo.conf');
var db = mongoose.connect(mongoConfig.mongodb);
console.log('mongodb is connected');
var ResourceSchema = new mongoose.Schema({
    id: String,
    name: String,
    child: Array
});
var Resource = mongoose.model('resource', ResourceSchema);
module.exports = Resource;