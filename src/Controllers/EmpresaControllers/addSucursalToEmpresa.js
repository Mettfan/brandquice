const { Product, User, Sucursal, Empresa } = require("../../db.js");



const addSucursalToEmpresa = async (req, res, next) => {

  let { empresaId, sucursalId } = req.body

  if(empresaId && sucursalId){
    let empresa = await Empresa.findOne({where: {id: empresaId}})
    let sucursal = await Sucursal.findOne({where: {id: sucursalId}})
    
    console.log(empresa);
    console.log(sucursal);
    await sucursal.addEmpresa(empresa).then( response => {
        res.send(response)
    })

    

  }
  

 
};

module.exports = addSucursalToEmpresa;
