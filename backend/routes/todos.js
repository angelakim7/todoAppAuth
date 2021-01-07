const router = require('express').Router();
const Todo = require('../controllers/todos.controller');
const auth = require("../middleware/auth");

//matches with "/api/todos"
router
    .route('/todos/')
    .post(auth,Todo.create)
    .get(Todo.findAll)

//matches with '/api/todos/:id
router
    .route('/todos/:id')
    .get(Todo.findById)
    .put(auth,Todo.updateById)
    .delete(auth,Todo.delete)

module.exports = router

