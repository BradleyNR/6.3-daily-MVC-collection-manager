const express = require('express');

let MainController = require('./controllers/main');

//export controlelrs
module.exports = function(app){
  let mainRouter = express.Router();

  //get function from controller
  mainRouter.get('/', MainController.home);

  mainRouter.get('/:id/delete', MainController.delete);
  mainRouter.get('/:id/update', MainController.update);
  mainRouter.post('/:id', MainController.addEdit);
  mainRouter.post('/', MainController.addEdit);


  app.use('/', mainRouter);
};
