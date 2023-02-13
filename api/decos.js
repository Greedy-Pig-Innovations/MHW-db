const express = require('express')
const decoRouter = express.Router();
const {decoData} = require('../db');
const { dataQuery } = require('./utils');



decoRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /decos");
        next();
        
    } catch (error) {
        throw error
    }
});

decoRouter.get('/', (req, res) => {
    dataQuery(req,res,decoData)
});

module.exports = decoRouter;