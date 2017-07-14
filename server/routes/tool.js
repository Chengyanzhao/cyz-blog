var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')
var ogr2ogr = require('ogr2ogr')
var multer = require('multer')
var upload = multer({
    dest: 'upload/'
})
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* convert shp to GeoJSON */
router.post('/shp2geoJson', upload.single('shpfile'), (req, res, next) => {
    if (!req.file) {
        res.json({
            success: false,
            message: 'shp文件上传失败'
        });
        return;
    }
    let tempFile = req.file;
    let filePath = tempFile.path;
    let originName = tempFile.originalname;
    if (!fs.existsSync(filePath)) {
        res.json({
            success: false,
            message: 'shp文件上传失败'
        });
        return;
    }
    let oldPath = path.resolve(__dirname, '../', filePath)
    let newPath = path.resolve(__dirname, '../', 'upload', originName)
    fs.renameSync(filePath, newPath);
    let tarProject = req.body.tarProject;
    let sourProject = req.body.sourProject
    let skipfailures = req.body.skipfailures;

    var ogr = ogr2ogr(newPath)
    if (tarProject && sourProject) {
        ogr.project(tarProject, sourProject)
    }
    if (skipfailures)
        ogr.skipfailures();

    res.set({
        'Content-Type': 'forcePlainText' in req.body ? 'text/plain; charset=utf-8' : 'application/json; charset=utf-8'
    })
    ogr.exec((err, data) => {
        fs.unlink(newPath)
        if (err) {
            res.json({
                success: false,
                message: er.message.replace('\n\n', '').split('\n')
            })
            return
        }
        res.json({
            success: true,
            data
        })
    })
});

// 图片转base64格式
router.post('/imgconvert', upload.single('imagefile'), (req, res, next) => {
    let imgPath = req.file.path
    let imageBuf = fs.readFileSync(imgPath)
    let base64Code = imageBuf.toString("base64")
    fs.unlink(imgPath)
    res.json(base64Code)
})

// 浏览器下载文件
router.get('/download', (req, res) => {
    /**
     * 浏览器请求下载文件只能使用get
     * 服务端获取参数，在req.query对象中，而post方式是在req.body对象中。
     */
    let filePath = ''
    res.set({
        'Content-Type': 'application/octet-stream',
        "Content-Disposition": "attachment;filename=" + encodeURI(fileName)
    })
    if (fs.existsSync(filePath))
        res.download(filePath);
    else {
        res.set("Content-type", "text/html")
        res.send("file not exist!")
        res.end()
    }
})
module.exports = router;