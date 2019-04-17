'use strict';
var app = require('./app');

var db = require('./config/db.js');

var port = 3800;

// app.listen(port, () => {
//     console.log('Servidor ejecutandose en http://localhost:3800');
// });

db.sequelize
	.authenticate()
	.then(() => {
		app.listen(port, () => {
			console.log('Servidor ejecutandose en http://localhost:3800');
		});
	})
	.catch(err => {
		console.log(err);
	});