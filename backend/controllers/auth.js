const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


module.exports ={
    register: async (req,res) => {
        try{
            let {_id, username, password}= req.body;

            if(!username || !password)
                return res
                    .status(400)
                    .json({msg:"Not all fields have been entered"});
            
            const existingUser = await User.findOne({username: username})
            if(existingUser)
                return res
                    .status(400)
                    .json({msg:"This username already exists"})

            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password,salt);

            const newUser = new User({
                _id,
                username,
                password:passwordHash,
            });

            const savedUser = await newUser.save();
            res.json(savedUser);
         }catch (err) {
             res.status(500).json({error:err.message})
         }
    },

    login: async (req,res)=>{
        try{
            const { username, password } = req.body;

            if(!username || !password)
                return res
                    .status(400)
                    .json({ msg: "Not all fields have been entered." });
            
            const user= await User.findOne({username:username})
            if(!user)
                return res
                    .status(400)
                    .json({msg: "No account with this email has been registered."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch)
                return res
                    .status(400).json({msg: "Invalid Credentials"})

            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            res.json({
                token,
                user:{
                    id:user._id,
                    username: user.username
                },
            });   
        } catch (err) {
            res.status(500).json({error:err.message})
        }
       
    },
    verifyToken: async (req, res) =>{
        try {
            const token = req.header("x-auth-token");
            if (!token) return res.json(false);
        
            const verified = jwt.verify(token, process.env.JWT_SECRET);
            if (!verified) return res.json(false);
        
            const user = await User.findById(verified.id);
            if (!user) return res.json(false);
        
            return res.json(true);
          } catch (err) {
            res.status(500).json({ error: err.message });
          }

    }


}