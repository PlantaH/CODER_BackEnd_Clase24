const express = require("express");
const session = require('express-session');

const app = express();
const { Router } = express;
const router = new Router();

//GET LOGIN
router.get("/", (req, res) => {
    if (req.session.user){
      res.send({user: req.session.user})
    }else{
      res.send(false);
    }
    
});

//POST LOGIN
router.post("/", (req, res) => {
  req.session.user = req.body.nombre;
  res.statusCode = 302;
  res.setHeader("Location", "http://localhost:8080");
  res.end()
});
 
module.exports = router;