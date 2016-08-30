const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

// for HTML rendering
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT||8080,function(){
  console.log('Now running on port 8080');
}
);
