var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('stats', { title: 'Estadisticas' });
  });
  
module.exports = router;
