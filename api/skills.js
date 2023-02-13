const express = require('express')
const skillsRouter = express.Router();
const {skillData} = require('../db')
const {dataQuery} = require('./utils')  


skillsRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /skills");
        next();
        
    } catch (error) {
        throw error
    }
});

skillsRouter.get('/', (req, res) => {
    dataQuery(req,res,skillData)
});

module.exports = skillsRouter;