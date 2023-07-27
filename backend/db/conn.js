const mongoose = require('mongoose');
// const dotenv = require('dotenv')
// dotenv.config();
const connectDB = async()=>{
    await  mongoose.connect(process.env.DATABASE)
    try {
       
          console.log('connection succesfull')  
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;