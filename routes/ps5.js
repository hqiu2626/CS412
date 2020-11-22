const express = require('express');
const router = express.Router();
const FETCHCONFIG = require('../config/fetchConfigs.js')
const https = require('https');

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const existsAsync = promisify(client.exists).bind(client);
const setAsync = promisify(client.set).bind(client);
const expireAsync = promisify(client.expire).bind(client);

/*
const response = async pokemon => {
    const rawReturnValue = await fetch(FETCHCONFIG.fetchOptions.url+pokemon.toString());
    const cleanReturnValue = await rawReturnValue.json();
    return cleanReturnValue;
}
*/

client.flushdb((err, success) => {
    if (err) {
        throw new Error(err)
    }
});

router.post('/', async (req, res, next) => {
    const poke = req.body.pokemon;
    let match = await existsAsync(poke);
    if (match) {
        let data = await getAsync(poke);
        let response = {
            data: data,
            cached: true
        }
        res.send(response);
    }
    else {
        const rawReturnValue = await fetch(FETCHCONFIG.fetchOptions.url+pokemon.toString());
        const cleanReturnValue = await rawReturnValue.json();
        await setAsync(poke, JSON.stringify(cleanReturnValue));
        let response = {
            data: cleanReturnValue,
            cached: false
        }
        await expireAsync(poke, 5);
        res.send(response);
    }
})

router.get('/find/:name', (req, res, next) => {
    const name = req.params.name;

    client.exists(name, (err, match) => {
        if (err) {
            throw new Error(err)
        }
        if (match) {
            client.get(name, (err, response) => {
                console.table(response);
                res.send(JSON.stringify(response + ' cached '))
            })

        } else {
            const reversedName = name.split('').reverse().join('');
            client.set(name, reversedName, (err, response) => {
                console.table(response);
                res.send(JSON.stringify(reversedName + ' not cached '))

            })
        }
    })
})

module.exports = router;