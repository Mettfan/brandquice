const { Product, User, Sucursal } = require("../../db.js");



const getUserSucursal = async (req, res, next) => {

    // let {userId} = req.query
    // let user = await User.findOne({where: {id: userId}})
    // let sucursals = await user.getSucursals()
    // res.send(sucursals)

    let {sucursalId} = req.query
    let sucursal = await Sucursal.findOne({where: {id: sucursalId}})
    let users = await sucursal.getUsers()
    res.send(users)

 
};

module.exports = getUserSucursal;
