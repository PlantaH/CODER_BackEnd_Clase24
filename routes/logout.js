const express = require("express");
const session = require('express-session');

const app = express();
const { Router } = express;
const router = new Router();

//GET LOGOUT
router.get("/", (req, res) => {
  req.session.destroy((err =>{
    if (err) console.log("Error al deslogearse")
    res.statusCode = 302;
    res.setHeader("Location", "http://localhost:8080");
    res.end()
  }))
});


//EXPORT MODULO ROUTER
module.exports = router;