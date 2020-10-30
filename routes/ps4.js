const express = require('express');
const router = express.Router();
const FETCHCONFIG = require('../config/fetchConfigs.js')
const https = require('https');

const response = async pokemon => {
    const rawReturnValue = await fetch(FETCHCONFIG.fetchOptions.url+pokemon.toString());
    const cleanReturnValue = await rawReturnValue.json();
    return cleanReturnValue;
}

router.route('/')
    .post( async(req, res, next) => {
        response(req.body.pokemon)
            .then(cleanReturnValue => res.render('ps4', {'name' : cleanReturnValue.name, 'weight' : cleanReturnValue.weight }))
            .catch(error => console.log("Error"))
    })

/*
router.get('/', function(req, res, next) {
    res.render('ps4', {name: `${p.forms[0].name}`,
        weight: `${p.weight}`});
});
*/

module.exports = router;