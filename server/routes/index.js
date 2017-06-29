var express = require('express');
var router = express.Router();
var Resource = require('../modules/resource.mod');

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
module.exports = router;