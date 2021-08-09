const {
	allTasks,
	newTask,
	taskById,
	updateTask,
	deleteTask
} = require('../queries/tasksQueries');

const getAllTasks = async (req, res, next) => {
	try {
		const tasks = await  allTasks();
		if(tasks.length > 0) {
			res.json({
				status: 200,
				message: 'Success fetching tasks',
				data: tasks
			});
		} else {
			res.status(400).json({
				status: 400,
				message: 'Data not found',
				data: tasks
			})
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error.message,
			data: error
		})
	}
};

const createTask = async (req, res, next) => {
	try {
		const task = await newTask(req.body);
		if(task) {
			res.json({
				status: 200,
				message: 'Task created',
				data: task
			})
		} else {
			res.status(400).json({
				status: 400,
				message: 'Error creating task',
				data: task
			})
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error.message,
			data: error
		})
	}
};

const getTaskById = async (req, res, next) => {
	try {
		const task = await taskById(req.params.id);
		if(task.length > 0) {
			res.json({
				status: 200,
				message: 'Task found',
				data: task
			})
		} else {
			res.status(400).json({
				status: 400,
				message: 'Task not found',
				data: task
			})
		}
	} catch (error) {

	}
}

const updateTaskById = async (req, res, next) => {
	try {
		const updated = await updateTask(req.params.id, req.body);	
		if(updated) {
			res.json({
				status: 200,
				message: 'Task Updated'
			})
		} else {
			res.status(400).json({
				status:400,
				message: 'Error updating task',
				data: updated
			})
		}
	} catch(error) {
		res.status(500).json({
			status: 500,
			message: 'Error Updating task',
			data: error.message
		})
	}
};

const deleteTaskById = async (req, res, next) => {
	try {
		const deleted = await deleteTask(req.params.id);
		if(deleted) {
			res.json({
				status: 200,
				message: 'Task Deleted'
			})
		} else {
			res.status(400).json({
				status: 400,
				message: 'Error deleting task',
				data: deleted
			})
		}
	} catch(error) {
		res.status(500).json({
			status: 500,
			message: 'Error deleting task',
			data: error.message
		})
	}
};

module.exports = {
	getAllTasks,
	createTask,
	getTaskById,
	updateTaskById,
	deleteTaskById
}