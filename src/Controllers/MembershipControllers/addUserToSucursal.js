const { Product, User, Sucursal, Membership } = require("../../db.js");



const addUserToMembership = async (req, res, next) => {

  let { userId, membershipId } = req.body
console.log(userId);
console.log(membershipId);
//   console.log(req.query);
  let respuesta = null

  if(membershipId){
    let membership = await Membership.findOne( {where: { id: membershipId}} )
    let user = await User.findOne( {where: {id: userId}} )
    await membership.addUser(user).then(response => {
        res.send(response)
    })
    // Sucursal.findOne( {where: { id: membershipId } } ).then( (sucursal) => {
      
    //   console.log(sucursal);
    //   User.findOne( {where: {id: userId }} ).then((user) => {
    //     console.log(user);
    //     sucursal.addUser(user).then((response) => {
    //         respuesta = response
    //         console.log(respuesta);
    //         res.send(respuesta)

    //     })
    //   })
    // })
    .catch(error => {
      console.log(error);
      res.send(error)
    })
  }
  else{
    Membership.findAll().then(membership => {
      console.log(membership);
      res.send({db: membership})
    })
  }

 
};

module.exports = addUserToMembership;
