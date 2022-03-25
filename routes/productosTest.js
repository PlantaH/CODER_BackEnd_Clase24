const express = require("express");
const {faker} = require("@faker-js/faker")

const app = express();
const { Router } = express;
const router = new Router();

const auth = (req, res, next) => {
    if (req.session && req.session.user) {      
        return next();
    } else {
        return res.status(401).send('no autorizado');
    }
};

//GET
router.get("/", auth, (req, res) => {
    //Genero un array vacio, le pusheo 5 productos con faker y lo envio
    let arrayPtos = [];
    
    for (let index = 0; index < 5; index++) {
        arrayPtos.push({
            titulo: faker.commerce.productName(),
            precio: faker.commerce.price(),
            thumbail: faker.image.image()
        })
    }

    res.send(arrayPtos)
});

//EXPORT MODULO ROUTER
module.exports = router;