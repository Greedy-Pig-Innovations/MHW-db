const express = require('express');
const router = express.Router();

  const ailmentsRouter = require('./ailments');
  const armorRouter = require('./armor');
  const charmsRouter = require('./charms');
  const decoRouter = require('./decos');
  const itemsRouter = require('./items');
  const locationsRouter = require('./locations');
  const monstersRouter = require('./monsters');
  const setsRouter = require('./sets');
  const skillsRouter = require('./skills');
  const weaponsRouter = require('./weapons')

  router.use('/ailments', ailmentsRouter);
  router.use('/armor', armorRouter);
  router.use('/charms', charmsRouter);
  router.use('/decos', decoRouter);
  router.use('/items', itemsRouter);
  router.use('/locations', locationsRouter);
  router.use('/monsters', monstersRouter);
  router.use('/sets', setsRouter);
  router.use('/skills', skillsRouter);
  router.use('/weapons', weaponsRouter);




  router.use((error,req,res,next) => {
    res.send({name:error.name,
        message:error.message})
})


module.exports = router;