const mongoose = require('mongoose');

//todo tasks schema
const todosSchema = new mongoose.Schema({
	userId: mongoose.Schema.ObjectId,
	username: {type: String, required: true},
	task: {type: String, required: true},
	isCompleted: {type: Boolean, required: true},
  }, {
	  timestamps: true,
  });

  const Todos = mongoose.model("Todos", todosSchema);

  module.exports = Todos;

  