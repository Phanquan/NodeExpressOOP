const express = require('express');
const route = express.Router();
const Data = require('../model/SimpleData');
const axios = require('axios');

const GITHUB_INFO = '/:userName'
let GET_USERNAME_URL = 'https://api.github.com/users';

route.get(GITHUB_INFO, (req, res, next) => {
    let userName = req.params.userName;
    let data = new Data();
    axios.get(GET_USERNAME_URL + '/' + userName)
        .then(response => {
            data.setData = response.data;
            data.setMessage = `GET ${userName} Github Info Successfull`;
            data.setSuccess = true;
            res.json(data);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = route;