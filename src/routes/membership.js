const express = require("express");
const addProductToMembership = require("../Controllers/MembershipControllers/addProductToMembership");
const addUserToMembership = require("../Controllers/MembershipControllers/addUserToSucursal");
const getMembership = require("../Controllers/MembershipControllers/getMembership");
const getUserMembership = require("../Controllers/MembershipControllers/getUserMembership");
const postMembership = require("../Controllers/MembershipControllers/postMembership");
const putMembership = require("../Controllers/MembershipControllers/putMembership");
const router = express.Router();

router.put("/membership", putMembership);
router.post("/membership", postMembership);
router.get("/membership", getMembership);
router.post("/membership/product", addProductToMembership);
router.post("/membership/user", addUserToMembership);
router.post("/membership/user", getUserMembership);

module.exports = router;
