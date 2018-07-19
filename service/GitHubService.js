const Promise = require('bluebird');
const axios = require('axios');

const GET_USERNAME_URL = 'https://api.github.com/users';

class GitHubService {
    getUserInfo(username) {
        return new Promise((resolve, reject) => {
            axios
                .get(GET_USERNAME_URL + '/' + username)
                .then(result => {
                    console.log(result);
                    resolve(result);
                }, error => {
                    console.log(error);
                    reject(error);
                })
        });
    }
}

module.exports = GitHubService;