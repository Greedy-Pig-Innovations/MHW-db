const express = require('express')
const decoRouter = express.Router();
const {decoData} = require('../db')



decoRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /decos");
        next();
        
    } catch (error) {
        throw error
    }
});

decoRouter.get('/', (req, res) => {
    console.log(req.query, 'This is the query');
    let filteredRecords = decoData;

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
});

module.exports = decoRouter;