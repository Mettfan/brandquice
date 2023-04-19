const express = require("express");
const getEmpresa = require("../Controllers/EmpresaControllers/getEmpresa");
const postEmpresa = require("../Controllers/EmpresaControllers/postEmpresa");
const putEmpresa = require("../Controllers/EmpresaControllers/putEmpresa");
const addSucursalToEmpresa = require("../Controllers/EmpresaControllers/addSucursalToEmpresa");
const addUserToEmpresa = require("../Controllers/EmpresaControllers/addUserToEmpresa");
const getUserEmpresa = require("../Controllers/EmpresaControllers/getUserEmpresa");

const router = express.Router();

router.put("/empresa", putEmpresa);
router.post("/empresa", postEmpresa);
router.get("/empresa", getEmpresa);
router.post("/empresa/add/sucursal", addSucursalToEmpresa);
router.post("/empresa/add/user", addUserToEmpresa);
router.get("/empresa/get/user", getUserEmpresa);



module.exports = router;
