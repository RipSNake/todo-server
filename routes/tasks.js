const express = require('express');
const router = express.Router();
const {
	getAllTasks,
	createTask,
	getTaskById,
	updateTaskById,
	deleteTaskById
} = require('../controllers/tasksController');

// GET All the tasks
router.get('/', getAllTasks);
// CREATE task
router.post('/new', createTask);
// GET Task by ID
router.get('/:id', getTaskById);
// UPDATE Task by ID
router.put('/:id', updateTaskById);
// DELETE Task by ID
router.delete('/:id', deleteTaskById);

module.exports = router;