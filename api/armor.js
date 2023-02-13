const express = require('express')
const armorRouter = express.Router();
const {armorData} = require('../db')
const {getAllArmor} = require('../db');
const { dataQuery } = require('./utils');


armorRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /armor");
        next();
        
    } catch (error) {
        throw error
    }
});

armorRouter.get('/', (req, res) => {
   dataQuery(req,res,armorData)
});

module.exports = armorRouter;