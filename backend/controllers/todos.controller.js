const db = require('../models');
const Todos = require('../models/todo.model');

module.exports={ 
    findAll: async function(req,res){
        db.Todos.find({})
        .sort({_id:-1})
        .then(dbModel => res.json(dbModel))
        .catch(err=> res.status(422).json(err));
    },
    findById: function(req,res){
        db.Todos.findById(req.params.id)
        .then(dbModel=> res.json(dbModel))
        .catch(err=> res.status(422).json(err))
    },
    findByUser: function(req,res){
        db.Todos.find({username:req.params.username})
        .then(dbModel=> res.json(dbModel))
        .catch(err => res.status(422).json(err))
	},
	findByCompleted: function(req,res){
		db.Todos.find({isCompleted:true})
		.then(todos=> res.json(todos))
		.catch(err => res.status(422).json(err))
	},
	findByIncompleted: function(req,res){
		db.Todos.find({isCompleted:false})
		.then(todos=> res.json(todos))
		.catch(err => res.status(422).json(err))
	},
	
	create: function(req,res){
		db.Todos.create(req.body)
		.then(todos=> 
			res.json({
				success: true,
				data:todos
			})
		)
		.catch(err => res.status(422).json(err))
	},
    
    updateById: function(req,res){
		db.Todos.findOneAndUpdate({_id:req.params.id}, req.body)
        .then(todos => res.json(todos))
        .catch(err => res.status(422).json(err))
    },
    updateByUser: function(req,res){
        db.Todos.findOneAndUpdate({username:req.params.username}, req.body)
        .then(todos => res.json(todos))
        .catch(err => res.status(422).json(err))
    },
    delete: function(req, res){
        db.Todos.findOneAndDelete({ _id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}