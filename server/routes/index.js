var express = require('express')
var router = express.Router()
var ogr2ogr = require('ogr2ogr')
var Resource = require('../modules/resource.mod')
var multer = require('multer')
var upload = multer({ dest: 'upload/' })

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
/* Resource */
router.get('/resource', (req, res, next) => {
  Resource.find({}, (error, data) => {
    if (data)
      res.json(data);
    else
      next();
  });
});
router.post('/tool', upload.single('file'), (req, res, next) => {
  console.log(req.file.path);
  var ogr = ogr2ogr(req.files.upload.path)
  console.log(req.files)
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
})
module.exports = router;