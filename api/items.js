const express = require('express')
const itemsRouter = express.Router();
const {itemData} = require('../db');
const { dataQuery } = require('./utils');



itemsRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /items");
        next();
        
    } catch (error) {
        throw error
    }
});

itemsRouter.get('/', (req, res) => {
    dataQuery(req,res,itemData)
});

module.exports = itemsRouter;