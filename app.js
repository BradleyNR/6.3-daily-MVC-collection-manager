const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routes');

const app = express();
//heroku database setup
let database = process.env.MONGODB_URI || 'mongodb://localhost/test';
mongoose.connect(database);

//view
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//middleware
app.use(bodyParser.urlencoded({ extended: false}));

//passing app into router
router(app);

//heroku port
app.listen(process.env.PORT || 3000);
