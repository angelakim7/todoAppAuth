const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
	userId: mongoose.Schema.ObjectId,
	username: {type: String, required: true},
	task: {type: String, required: true},
	isCompleted: {type: Boolean, required: true},
	// date: {type: Date, required: true}.
	// todos: [
	//   {
	// 	task: {
	// 		type: String,
	// 		required: true,
	// 		date: {
	// 			type: Date,
	// 			default: Date.now
	// 		},
	// 		checked: Boolean,
	// 	},
	//   },
	// ],
  }, {
	  timestamps: true,
  });

  const Todos = mongoose.model("Todos", todosSchema);

  module.exports = Todos;

  