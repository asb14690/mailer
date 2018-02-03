/*
 * Basic server setup file
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false
}));
app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(multipartMiddleware);

var emailer = require('./helper/emailer.js');

app.post('/sendmail', function(req,res){
	emailer.sendmail(req,res);
});

app.listen(3000, function() {
	console.log("Server is running.....");
})

