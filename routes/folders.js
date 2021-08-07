const express = require('express');
const router = express.Router();
const {
	getFolders,
	createFolder,
	removeFolder
} = require('../controllers/foldersController');
// GET ALL FOLDERS
router.get('/', getFolders);
// CREATE NEW FOLDER
router.post('/', createFolder);
// DELETE FOLDER
router.delete('/:id', removeFolder);

module.exports = router;