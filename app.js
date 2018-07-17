const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const HelloWorldRoute = require('./route/HelloWorldRoute');
const GitHubRoute = require('./route/GitHubRoute');

app.use('/', HelloWorldRoute);
app.use('/gitHubInfo', GitHubRoute);

app.listen(3000, () => {
    console.log('listening on port 3000');
});