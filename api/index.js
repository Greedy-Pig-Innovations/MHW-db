const express = require('express');
const router = express.Router();



  router.use((error,req,res,next) => {
    res.send({name:error.name,
        message:error.message})
})


module.exports = router;