var express = require('express')
var ogr2ogr = require('ogr2ogr')
var fs = require('fs')
var multer = require('multer')
var router = express.Router()
var upload = multer({ dest: 'upload/' })
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/shp2geoJson', upload.single('shpfile'), (req, res, next) => {
    console.log(req.file.path);
    var ogr = ogr2ogr(req.files.upload.path)
    if (req.body.targetSrs) {
        ogr.project(req.body.targetSrs, req.body.sourceSrs)
    }

    if ('skipFailures' in req.body) {
        ogr.skipfailures();
    }

    res.header('Content-Type', 'forcePlainText' in req.body ? 'text/plain; charset=utf-8' : 'application/json; charset=utf-8')

    ogr.exec(function (er, data) {
        fs.unlink(req.files.upload.path)
        if (er) return res.json({
            errors: er.message.replace('\n\n', '').split('\n')
        })
        if (req.body.callback) res.write(req.body.callback + '(')
        res.write(JSON.stringify(data))
        if (req.body.callback) res.write(')')
        res.end()
    })
});

// 图片转base64格式
router.post('/img2base64', upload.single('imagefile'), (req, res, next) => {
    let imgPath = req.file.path;
    let imageBuf = fs.readFileSync(imgPath);
    let base64Code = imageBuf.toString("base64");
    console.log(base64Code);
    res.json(base64Code)
})
module.exports = router;
