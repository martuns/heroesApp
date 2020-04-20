var express = require('express');
var router = express.Router();

const heroesController = require('../controllers/heroesController');



const fs = require('fs');
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

/* GET users listing. */
/* GET heroes page. */
router.get('/', heroesController.listado )
router.get('/detalle/', heroesController.ingresar)
router.get('/detalle/:id', heroesController.detalle)
router.get('/bio/:id/:ok?', heroesController.bio);
router.get('/bio/', heroesController.ingresar)

module.exports = router;
