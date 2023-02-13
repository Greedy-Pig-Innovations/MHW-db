const express = require('express')
const weaponsRouter = express.Router();
const {bowData, chargeBladeData, dualBladesData, glaiveData, greatSwordData, gunlanceData, hammerData, 
    hbgData, huntingHornData, lanceData, lbgData, longSwordData, snsData, switchAxeData} = require('../db/weapons');

weaponsRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /weapons");
        next();
        
    } catch (error) {
        throw error
    }
});

// weaponsRouter.get('/bow', (req,res) => {
//     dataQuery(bowData);
// })

weaponsRouter.get("/chargeblade", (req,res) => {
    console.log(req.query, 'This is the query');
    let filteredRecords = chargeBladeData;

    // Filter the records based on query parameters
    for (const key in req.query) {
        filteredRecords = filteredRecords.filter(record => {
            const nestedProperties = key.split('.');
            let nestedValue = record;
            for (let i = 0; i < nestedProperties.length; i++) {
                nestedValue = nestedValue[nestedProperties[i]];
                if (!nestedValue) {
                    break;
                }
            }
            return String(nestedValue) === String(req.query[key]);
        });
    }

    // Return the filtered records as a JSON response
    res.json(filteredRecords);
})



module.exports = weaponsRouter;