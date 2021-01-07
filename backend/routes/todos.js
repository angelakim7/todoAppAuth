const router = require('express').Router();
const Todo = require('../controllers/todos.controller');
const auth = require('../middleware/auth');

//matches with '/api/todos'
router
    .route('/todos/')
    .post(auth,Todo.create)
    .get(Todo.findAll)

//matches with '/api/todos/:id'
router
    .route('/todos/:id')
    .get(Todo.findById)
    .put(auth,Todo.updateById)
    .delete(auth,Todo.delete)

//matches with '/api/todos/username/:username'
router
    .route('/todos/username/:username')
    .get(Todo.findByUser)
    .put(auth,Todo.updateByUser)
   
//matches with '/api/todos/isCompleted/:boolean'
router
    .route('/todos/isCompleted/true')
    .get(Todo.findByCompleted)
   
router
    .route('/todos/isCompleted/false')
    .get(Todo.findByIncompleted)
   

module.exports = router

