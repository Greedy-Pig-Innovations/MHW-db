const express = require('express')
const charmsRouter = express.Router();
const {charmData} = require('../db');
const { dataQuery } = require('./utils');



charmsRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /charms");
        next();
        
    } catch (error) {
        throw error
    }
});

charmsRouter.get('/', (req, res) => {
    dataQuery(req,res,charmData)
});

module.exports = charmsRouter;