const express = require('express')
const locationsRouter = express.Router();
const {locationData} = require('../db');
const { dataQuery } = require('./utils');



locationsRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /locations");
        next();
        
    } catch (error) {
        throw error
    }
});

locationsRouter.get('/', (req, res) => {
    dataQuery(req,res,locationData)
});

module.exports = locationsRouter;