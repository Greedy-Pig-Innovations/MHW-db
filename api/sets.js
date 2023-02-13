const express = require('express')
const setsRouter = express.Router();
const {setData} = require('../db')
const {dataQuery} = require('./utils')  



setsRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /sets");
        next();
        
    } catch (error) {
        throw error
    }
});

setsRouter.get('/', (req, res) => {
    dataQuery(req,res,setData)
});

module.exports = setsRouter;