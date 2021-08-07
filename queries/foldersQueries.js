const pool = require('../database/database');

const getAllFolders = async () => {
	return await pool.then(
		conn => conn.query('SELECT * FROM folders'),
		error => error);
};

const createNewFolder = async (folder) => {
	return await pool.then(
		conn => conn.query('INSERT INTO folders (name) VALUES (?)',[folder.name]),
		error => error);
};

const deleteFolder = async (folderId) => {
	return await pool.then(
		conn => conn.query('DELETE FROM folders WHERE id = ?',[folderId]),
		error => error);
};

module.exports = {
	getAllFolders,
	createNewFolder,
	deleteFolder
}