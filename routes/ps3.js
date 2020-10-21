var express = require('express');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.render('ps3a', {'str': 'Hey now!'});
        //res.render('ps3', {str: 'Hey now!'});
    })

    .post((req, res, next) => {
        //res.send( {str: `${req.body.str}`, str_length: `${req.body.str.length}`});
        res.render('ps3b',{'str': req.body.str, 'str_length': req.body.str.length});


    })

module.exports = router;