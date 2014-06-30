var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var port = process.env.PORT || 3000;
var mongo = require('mongoose');

mongo.connect('mongodb://localhost/musicnest');
var db = mongo.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("Connected to MongoDB!");
});

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

//  Defines the template all artists are stored as
var artistSchema = mongo.Schema({
  name: String,
  echonestID: String,
  twitterID: String,
  facebookID: String,
  soundcloudID: String,

});

artistSchema.methods.update = function() {
  // Update Entry for schema
}


app.listen(port);
console.log('Listening on port ' + port);
