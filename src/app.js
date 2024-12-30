const express = require("express")
const { adminroutes } = require("./routes/admin/adminroutes")
const allroutes = express.Router()
const usercoutes  = express.Router()


allroutes.use("/admin", adminroutes)  //routes of admin
allroutes.use("/user", usercoutes)    // routes of user

module.exports = {allroutes}

