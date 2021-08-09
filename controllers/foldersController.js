const {
	getAllFolders,
	createNewFolder,
	deleteFolder
} = require('../queries/foldersQueries');

const getFolders = async (req, res, next) => {
	try {
		const folders = await getAllFolders();
		if(folders.length > 0) {
			res.json({
				status: 200,
				message: 'Folders fetched',
				data: folders
			})
		} else {
			res.status(400).json({
				status: 400,
				message: 'Data not found',
				data: folders
			})
		}
	} catch(error) {
		res.status(500).json({
			status: 500,
			message: 'Server Error',
			data: error.message
		})
	}
};

const createFolder = async (req, res, next) => {
	try {
		const folder = await createNewFolder(req.body);
		if(folder) {
			res.json({
				status: 200,
				message: 'Folder Created',
				data: folder
			})
		} else {
			res.status(400).json({
				status: 400,
				message: 'Error creating folder',
				data: folder
			})
		}
	} catch(error) {
		res.status(500).json({
			status: 500,
			message: 'Server Error',
			data: error.message
		})
	}
};

const removeFolder = async (req, res, next) => {
	try {
		const deleted = await deleteFolder(req.params.id);
		if(deleted) {
			res.json({
				staus: 200,
				message: 'Folder deleted'
			})
		} else {
			res.status(400).json({
				status: 400,
				message: 'Error deleting folder',
				data: deleted
			})
		}
	} catch(error) {
		res.status(500).json({
			status: 500,
			message: 'Server Error',
			data: error.message
		})
	}
};

module.exports = {
	getFolders,
	createFolder,
	removeFolder
}