const { Product, User, Sucursal, Membership } = require("../../db.js");



const addProductToMembership = async (req, res, next) => {

  let { productId, membershipId } = req.body

  if(productId && membershipId){
    let producto = await Product.findOne({where: {id: productId}})
    let membership = await Membership.findOne({where: {id: membershipId}})
    
    console.log(producto);
    console.log(membership);
    await membership.addProduct(producto).then( response => {
        res.send(response)
    })

    

  }
  

 
};

module.exports = addProductToMembership;
