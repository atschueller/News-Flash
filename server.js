const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cheerio = require("cheerio");
var axios = require("axios");
const request = require("request");

const db = require('./models');

const PORT = process.env.PORT || 3000;
var app = express();    

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

require('./routes/apiroutes')(app);

mongoose.connect('mongodb://localhost/mongoose')


app.listen(PORT, function(){
  console.log('App listening on Port: ' + PORT)
});

