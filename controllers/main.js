const Entry = require('../models/entry');

let MainController = {
  home: function(req, res){
    //find then display
    Entry.find().then(function(entry){
      res.render('index', {entry: entry});
    });
  },
  addEdit: function(req, res){
    //getting data from form
    let entryId = req.params.id;
    let game = req.body.entry;
    let genre = req.body.genre;
    console.log(entryId);
    //check to see if there is an entry Id
    //if there is, redirect and update database, if not just redirect to add from mainpage

    //SET THE
    if (entryId) {
      Entry.findByIdAndUpdate(entryId, {$set: {game: req.body.entry, genre: req.body.genre}}).then(function(){
        console.log('working');
        res.redirect('/');
      })
    } else {
      let newGame = new Entry({game: game, genre: genre});
      newGame.save(function(){
        res.redirect('/');
      })
    }
  },
  delete: function(req, res){
    //grabbing ID from handlebars
    let entryId = req.params.id;
    //remove from mongodb then redirect
    Entry.deleteOne({"_id": entryId}).then(function(){
      res.redirect('/');
    })
  },
  update: function(req, res){
    let entryId = req.params.id;
    console.log('update method', entryId);
    //find the document then render the update page passing that document through
    Entry.findOne({"_id": entryId}).then(function(entry){
      res.render('update', {entry: entry});
    })
  }
}

module.exports = MainController;
