const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost/test');
//view
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//middleware
app.use(bodyParser.urlencoded({ extended: false}));

//passing app into router
router(app);

app.listen(3000);
