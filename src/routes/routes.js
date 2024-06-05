const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/create', usersController.createUser);
router.get('/read', usersController.getAllUsers); 
router.post('/update/:idtb_identificacao', usersController.updateUser);
router.post('/delete/:idtb_identificacao', usersController.deleteUser); 

module.exports = router;
