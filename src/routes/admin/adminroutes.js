const express = require("express");
const {AdminLogin } = require("../../controlers/admin/login");
const adminroutes = express.Router();
adminroutes.post("/admin-login", AdminLogin)
module.exports = {adminroutes}// for admin routes
