const express = require('express')
const weaponsRouter = express.Router();
const {bowData, chargeBladeData, dualBladesData, glaiveData, greatSwordData, gunlanceData, hammerData, 
    hbgData, huntingHornData, lanceData, lbgData, longSwordData, snsData, switchAxeData} = require('../db/weapons');

const {dataQuery} = require('./utils')    

weaponsRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /weapons");
        next();
        
    } catch (error) {
        throw error
    }
});

weaponsRouter.get('/bow', (req,res) => {
    dataQuery(req,res,bowData);
});

weaponsRouter.get("/charge-blade", (req,res) => {
    dataQuery(req,res,chargeBladeData)
});

weaponsRouter.get("/dual-blades", (req,res) => {
    dataQuery(req,res,dualBladesData)
});

weaponsRouter.get("/insect-glaive", (req,res) => {
    dataQuery(req,res,glaiveData)
});

weaponsRouter.get("/great-sword", (req,res) => {
    dataQuery(req,res,greatSwordData)
});

weaponsRouter.get("/gunlance", (req,res) => {
    dataQuery(req,res,gunlanceData)
});

weaponsRouter.get("/hammer", (req,res) => {
    dataQuery(req,res,hammerData)
});

weaponsRouter.get("/heavy-bow-gun", (req,res) => {
    dataQuery(req,res,hbgData)
});

weaponsRouter.get("/hunting-horn", (req,res) => {
    dataQuery(req,res,huntingHornData)
});

weaponsRouter.get("/lance", (req,res) => {
    dataQuery(req,res,lanceData)
});

weaponsRouter.get("/light-bow-gun", (req,res) => {
    dataQuery(req,res,lbgData)
});

weaponsRouter.get("/long-sword", (req,res) => {
    dataQuery(req,res,longSwordData)
});

weaponsRouter.get("/sword-and-shield", (req,res) => {
    dataQuery(req,res,snsData)
});

weaponsRouter.get("/switch-axe", (req,res) => {
    dataQuery(req,res,switchAxeData)
});



module.exports = weaponsRouter;