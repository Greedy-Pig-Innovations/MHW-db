const express = require('express');
const ailmentsRouter = express.Router();
const { ailments } = require('../db/ailments');
const { dataQuery } = require('./utils');


ailmentsRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /ailments")
        next();
        
    } catch (error) {
        throw error
    }
})

ailmentsRouter.get("/", async (req,res) => {
    dataQuery(req,res,ailments)
})


module.exports = ailmentsRouter;