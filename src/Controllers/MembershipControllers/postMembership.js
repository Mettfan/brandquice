const { Membership } = require("../../db.js");



const postMembership = async (req, res, next) => {

  let { membership } = req.body
  try{
    console.log(typeof membership);
    // console.log(JSON.stringify(productos) );
    await Membership.create({...membership}).then( async d => {
        console.log(d);
      console.log('status: ' + JSON.stringify(d));
      await Membership.findOne({where: {type: membership.type}}).then( (d2) => {
        console.log(d2,  ' <-database');
        res.status(200).send({membership: membership, db: d2})
      })

    })
  }
  catch(error){
    res.send({error: error.error})
  }
 
};

module.exports = postMembership;
