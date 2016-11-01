const express = require('express');
const router = express.Router();
const names = {};

router.get('/', function(req, res, next) {
  res.render('names.ejs', { names: names });
});

router.post('/', function(req, res, next) {
  const name = req.body.name;
    if(names[name]) {
      names[name]++;
    }
    else {
      names[name] = 1;
    };
  res.redirect('/names');
});

module.exports = router;
