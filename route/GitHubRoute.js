const express = require('express');
const route = express.Router();
const SimpleData = require('../model/SimpleData');
const axios = require('axios');
const GitHubService = require('../service/GitHubService');

const GITHUB_INFO = '/:userName';

const service = new GitHubService();

route.get(GITHUB_INFO, (req, res, next) => {
    let userName = req.params.userName;
    let data = new SimpleData();
    service.getUserInfo(userName)
        .then((result) => {
            data.setData = result.data;
            data.setSuccess = true;
            data.setMessage = `GET ${userName} info successfully.`;
            res.json(data);
        }, (error) => {
            data.setData = error.response.data;
            data.setSuccess = false;
            data.setMessage = `GET ${userName} info unsuccessfully.`;
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            next();
        });
});

module.exports = route;