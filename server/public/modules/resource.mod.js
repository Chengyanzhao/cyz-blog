var mongoose = require('mongoose');
var mongoConfig = require('../config/mongo.conf');
var db = mongoose.connect(mongoConfig.mongodb);

db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("——数据库连接成功！——");
});

var ResourceSchema = new mongoose.Schema({
    name: String,
    aliasname: String,
    child: Array
}, {
    collection: 'resource'
});
var Resource = db.model('resource', ResourceSchema);
module.exports = Resource;