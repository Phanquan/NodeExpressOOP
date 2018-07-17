const express = require('express');
const route = express.Router();
const SimpleData = require('../model/SimpleData');
const axios = require('axios');

const HELLO_WORLD = '/helloworld';

route.get(HELLO_WORLD, (req, res, next) => {
    let data = new SimpleData();
    data.setSuccess = true;
    data.setMessage = `Get ${HELLO_WORLD} successfully`;
    data.setData = `Hello World`;
    res.json(data);
});

module.exports = route;