const express = require('express');
const task = require('../controllers/taskController');
const router = express.Router();

router.get('/',task.getTasks)
router.post('/',task.addTask)
router.patch('/:id',task.updateTask)
router.delete('/:id',task.deleteTask)
router.get('/:id',task.getById)





module.exports=router;