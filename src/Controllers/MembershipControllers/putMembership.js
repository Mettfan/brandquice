const { Membership } = require("../../db.js");



const putMembership = async (req, res, next) => {

  let { findBy, infoUpdated, id  } = req.body
  let key = findBy

  try{
    // console.log(JSON.stringify(productos) );
    Membership.update( { [key]: infoUpdated }, { where: { id: id }} ).then( result => {
        res.status(200).send({result: result})
    })
  }
  catch(error){
    res.send({error: error.error})
  }
 
};

module.exports = putMembership;
