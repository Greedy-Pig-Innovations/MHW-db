const express = require('express')
const monstersRouter = express.Router();
const {monsterData} = require('../db')



monstersRouter.use((req,res,next) => {
    try {
        console.log("A request is being made to /monsters");
        next();
        
    } catch (error) {
        throw error
    }
});

monstersRouter.get('/', (req, res) => {
    console.log(req.query, 'This is the query');
    let filteredRecords = monsterData;

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

module.exports = monstersRouter;