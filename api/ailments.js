const express = require('express');
const ailmentsRouter = express.Router();

const {getAllAilments, getAilmentById, getAilmentByName} = require('../db');


ailmentsRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /ailments")
        next();
        
    } catch (error) {
        throw error
    }
})

ailmentsRouter.get("/", async (req,res) => {

    try {
        const ailments = await getAllAilments();
        res.send(ailments);
        
    } catch (error) {
        throw error
    }
})

ailmentsRouter.get("/:id", async (req,res) => {
    
    try {
        const id = req.params;
        const ailment = await getAilmentById(id);
    
        res.send(ailment);
        
    } catch (error) {
        throw error
    }
    
})

ailmentsRouter.get("/:name", async (req,res) => {
   
   try {
       const {name} = req.params;
       const ailment = await getAilmentByName(name)
   
       res.send(ailment)
    
   } catch (error) {
    throw error;
   }
})


module.exports = ailmentsRouter;