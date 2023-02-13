const express = require('express')
const monstersRouter = express.Router();
const {monsterData} = require('../db');
const { dataQuery } = require('./utils');



monstersRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /monsters");
        next();
        
    } catch (error) {
        throw error
    }
});

monstersRouter.get('/', (req, res) => {
    dataQuery(req,res,monsterData)
});

module.exports = monstersRouter;