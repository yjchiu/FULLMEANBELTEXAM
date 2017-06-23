var express = require("express");
var app = express();

const path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/dist')));

require('./server/config/mongoose.js');

var routes_setter =require('./server/config/routes.js')

routes_setter(app);


app.listen(8000, function() {
  console.log("listening on port 8000");
})