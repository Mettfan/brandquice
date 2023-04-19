const { Product, User, Sucursal, Empresa } = require("../../db.js");



const addUserToEmpresa = async (req, res, next) => {

  let { userId, empresaId } = req.body
console.log(userId);
console.log(empresaId);
//   console.log(req.query);
  let respuesta = null

  if(empresaId){
    let empresa = await Empresa.findOne( {where: { id: empresaId}} )
    let user = await User.findOne( {where: {id: userId}} )
    await user.addEmpresa(empresa).then(response => {
      console.log(response);
        res.send(response)
    })
    // empresa.findOne( {where: { id: empresaId } } ).then( (empresa) => {
      
    //   console.log(empresa);
    //   User.findOne( {where: {id: userId }} ).then((user) => {
    //     console.log(user);
    //     empresa.addUser(user).then((response) => {
    //         respuesta = response
    //         console.log(respuesta);
    //         res.send(respuesta)

    //     })
    //   })
    // })
    .catch(error => {
      console.log({error: error});
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

module.exports = addUserToEmpresa;
