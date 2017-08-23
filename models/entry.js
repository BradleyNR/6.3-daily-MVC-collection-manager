const mongoose = require('mongoose');

//creating 'template'
const entrySchema = new mongoose.Schema({
  game: {type: String, required: true, unique: true},
  genre: {type: String},
});

//this will be called in our controller
const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
