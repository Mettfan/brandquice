const { Product, User, Empresa } = require("../../db.js");



const getEmpresa = async (req, res, next) => {

  let { filter, value } = req.query

  console.log(req.query);
  let respuesta = null

  if(filter){
    Empresa.findOne( {where: { [filter]: value } } ).then( (empresa) => {
      respuesta = empresa
      console.log(respuesta);
      res.send(respuesta)
    })
    .catch(error => {
      console.log(error);
      res.send(error)
    })
  }
  else{
    Empresa.findAll().then(empresa => {
      console.log(empresa);
      res.send({db: empresa})
    })
  }

 
};

module.exports = getEmpresa;
