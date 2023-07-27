const express= require('express')
const app = express();
const mongoose = require('mongoose')
const User = require('../Model/userModel');
const router = express.Router();


router.get("/",async (req, res) => {
    try {
     const showAll = await User.find();
     res.status(200).json(showAll)
    } catch (error) {
     console.log(error)
         res.status(500).json({error:error.mesaage})
    }
 })
 
 // CREATE 
 router.post('/', async (req, res) => {
     const { name, email, age } = req.body;
 
     try {
         const userAdded = await User.create({
             name: name,
             email: email,
             age: age,
         });
         
         res.status(201).json(userAdded)
     } catch (error) {
         console.log(error)
         res.status(400).json({error:error.message})
     }
 });

    //GET SINGLE USER
    router.get("/:id",async (req, res) => {
        const{id} = req.params
        try {
         const singleUser = await User.findById({_id:id});      
         res.status(200).json(singleUser)
        } catch (error) {
         console.log(error)
             res.status(500).json({error:error.mesaage})
        }
     });

     //DELELTE THE CRUD
     router.delete("/:id",async (req, res) => {
        const{id} = req.params;
        try {
         const deleteUser = await User.findByIdAndDelete({_id:id});      
         res.status(201).json(deleteUser)
        } catch (error) {
         console.log(error)
             res.status(400).json({error:error.mesaage})
        }
     });
     
     //PUT OPERATOR update
     router.patch("/:id",async (req, res) => {
        const{id} = req.params;
        const{name,email,age} = req.body;
        try {
         const updateUser = await User.findByIdAndUpdate(id, req.body,{new:true});      
         res.status(200).json(updateUser)
        } catch (error) {
         console.log(error)
             res.status(400).json({error:error.mesaage})
        }
     });


 module.exports = router;