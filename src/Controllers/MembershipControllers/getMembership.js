const { Membership } = require("../../db.js");



const getMembership = async (req, res, next) => {

  let { filter, value } = req.query

  console.log(req.query);
  let respuesta = null

  if(filter){
    Membership.findOne( {where: { [filter]: value } } ).then( (membership) => {
      respuesta = membership
      console.log(respuesta);
      res.send(respuesta)
    })
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

module.exports = getMembership;
