const express = require('express');
const ailmentsRouter = express.Router();

const {getAllAilments, getAilmentById, getAilmentByName} = require('../db');


ailmentsRouter.use((req,res,next) => {
    console.log("A request is being made to /ailments")
    next();
})

ailmentsRouter.get('/', async (req,res) => {
    const ailments = await getAllAilments();
    res.send(ailments);
})

ailmentsRouter.get('/:id', async (req,res) => {
    const id = req.params;
    const ailment = await getAilmentById(id);

    res.send(ailment);
})

ailmentsRouter.get('/:name', async (req,res) => {
    const {name} = req.params;
    const ailment = await getAilmentByName(name)

    res.send(ailment)
})


module.exports = ailmentsRouter;