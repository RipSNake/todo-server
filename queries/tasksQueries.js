const pool = require('../database/database');

const allTasks = async () => {
	return await pool
		.then(conn => conn.query('SELECT * FROM tasks'),
		error => error );
}

const newTask = async (task) => {
	return await pool.then(
		conn => conn.query('INSERT INTO tasks (description, done, folderId) VALUES (?, ?, ?)',[task.description, task.done, task.folderId]),
		error => error);
}

const taskById = async (id) => {
	return await pool.then(
		conn => conn.query('SELECT * FROM tasks WHERE id = ?',[id]),
		error => error);
}

const updateTask = async (taskId, task) => {
	return await pool.then(
		conn => conn.query('UPDATE tasks SET description=?, done=?, folderId=? WHERE id = ?',[task.description, task.done, task.folderId, taskId]),
		error => error);
}

const deleteTask = async (id) => {
	return await pool.then(
		conn => conn.query('DELETE FROM tasks WHERE id = ?',[id]),
		error => error);
}

module.exports = {
	allTasks,
	newTask,
	taskById,
	updateTask,
	deleteTask
}