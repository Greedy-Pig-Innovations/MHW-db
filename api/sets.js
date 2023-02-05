const express = require('express')
const setsRouter = express.Router();
const {setData} = require('../db')



setsRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /sets");
        next();
        
    } catch (error) {
        throw error
    }
});

setsRouter.get('/', (req, res) => {
    console.log(req.query, 'This is the query');
    let filteredRecords = setData;

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

module.exports = setsRouter;