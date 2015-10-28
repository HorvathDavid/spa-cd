var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(400).send('Bad Request');
});

router.post('/post', function(req, res, next) {
  if (req.get('Authorization') === 'whatever') {
    req.accepts('application/json');
    res.format({
      json: function() {
        res.status(200).json({"valid": "true"});
      },

      default: function() {
        // log the request and respond with 406
        res.status(406).send('Not Acceptable');
      },
    });
  } else {
    res.status(400).json({valid: 'false'});
  }
});

module.exports = router;
