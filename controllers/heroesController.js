const fs = require('fs');
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));
const mainController = require('../controllers/mainController');


const titulo = 'Heroes App';
const footer = mainController.creditos;
let content = '';
let nombre = '';

const heroesController = {
	ingresar : function (req,res,next){
		nombre = '';
		content = 'Tenes que ingresar un numero de Id para continuar';
		res.render('heroes', { titulo, nombre, content,  footer })
	},
	listado: function (req, res, next) {
		heroes.forEach(function(heroe){
			content += `- Nombre: ${heroe.nombre}. Profesion ${heroe.profesion}\n\n`;
		})
		nombre = '';
		
		res.render('heroes', { titulo, nombre, content,  footer })
	},
	detalle: function (req, res, next) {
		let id = req.params.id;
		let heroe = heroes.find(h => h.id == id);
		if (heroe == undefined) {
			content = `No se encuentra el heroe  ${id}`;
		} else {
			nombre = `Hola mi nombre es ${heroe.nombre} y soy ${heroe.profesion} `;
			content = '';
		}
		res.render('heroes', { titulo, nombre, content, footer })
	},
	bio: function (req, res, next) {
		let id = req.params.id;
		let heroe = heroes.find(h => h.id == id);
		let okEstatus = req.params.ok;
		if (heroe == undefined) {
			content = `No encontramos un héroe para mostrarte su biografía`;
		} else if (okEstatus == undefined) {
			nombre =  `Mi nombre es ${heroe.nombre}. Lamento que no desees saber más de mi :(`;
			content = '';
		}
		else {
			nombre =  heroe.nombre;
			content = `${heroe.resenia} `;
		}
		res.render('heroes', { titulo, nombre, content, footer })
	}


};
module.exports = heroesController;



