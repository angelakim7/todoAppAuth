const router = require('express').Router();
const todosRoutes = require('./todos');
const authUser = require('./auth');

// api routes
router.use('/api/',todosRoutes)
router.use('/api/',authUser)
  
module.exports = router;