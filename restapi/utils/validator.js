module.exports = {

  user:(app, req, res) => {
    req.assert('_name', 'O nome é obrigtório.').notEmpty();
    req.assert('_email', 'O email está inválido.').notEmpty().isEmail();

    let errors = req.validationErrors();

    if(errors) {
      app.utils.error.send(err, req, res);
      return false;

    } else {

      return true;
      
    }
  }

};