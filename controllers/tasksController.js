const {
	allTasks,
	newTask,
	taskById,
	updateTask,
	deleteTask
} = require('../queries/tasksQueries');

const getTasks = (req, res, next) => {
	res.send({message: 'From get All tasks controller'});
};

const createTask = (req, res, next) => {
	res.send({message: `Created new Task !! from controller`})
};

const getTaskById = (req, res, next) => {
	res.send({message: `Task ID = ${req.params.id}`})
}

const updateTaskById = (req, res, next) => {
	res.send({message: `Updated Task ID = ${req.params.id} from controller`})
};

const deleteTaskById = (req, res, next) => {
	res.send({message: `Deleted Task ID = ${req.params.id} from controller`})
};

module.exports = {
	getTasks,
	createTask,
	getTaskById,
	updateTaskById,
	deleteTaskById
}