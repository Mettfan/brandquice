const { Product, User, Sucursal, Membership } = require("../../db.js");



const getUserMembership = async (req, res, next) => {
    let {userId} = req.body
    let user = await User.findOne({where: {id: userId}})
    let membership = await user.getMembership()
    res.send(membership)

 
};

module.exports = getUserMembership;
