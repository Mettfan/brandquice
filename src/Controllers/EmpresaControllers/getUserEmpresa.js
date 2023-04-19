const { Product, User, Empresa } = require("../../db.js");



const getUserEmpresa = async (req, res, next) => {



    let {userId} = req.query
    let user = await User.findOne({where: {id: userId}})
    let empresas = await user.getEmpresas()
    res.send(empresas)

 
};

module.exports = getUserEmpresa;
