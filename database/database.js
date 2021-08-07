const mysql = require('promise-mysql');

const pool = mysql.createPool({
	connectionLimit: 10,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
});

pool.then(connection => {

	connection.on('connection', () => {
		console.log('Connection stablished');
	})

	connection.on('acquire', () => {
		console.log('Acquire connection');
	})

	connection.on('release', () => {
		console.log('Connection released');
	})
}, err => {
	console.log('Connection ERROR ', err)
}).catch( err => console.log('Catch ERROR ', err))

module.exports = pool;