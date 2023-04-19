const { Product, User, Empresa } = require("../../db.js");



const postEmpresa = async (req, res, next) => {

  let { empresa } = req.body
  try{
    console.log(empresa);
    // console.log(JSON.stringify(productos) );
    Empresa.create(empresa).then( d => {
        console.log(d);
      console.log('status: ' + JSON.stringify(d));
      Empresa.findOne({where: {name: empresa.name}}).then( (d2) => {
        console.log(d2,  ' <-database');
        res.status(200).send({empresa: empresa, db: d2})
      })

    })
  }
  catch(error){
    res.send({error: error.error})
  }
 
};

module.exports = postEmpresa;
