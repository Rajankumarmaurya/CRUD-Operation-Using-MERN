const mongoose = require('mongoose');
const userMOdel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    age:{
        type:Number,
    },

    
},{timestamps:true});
const User = mongoose.model('user',userMOdel)
module.exports = User;