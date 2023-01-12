const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

router.use(async (req, res, next) => {
    const prefix = 'Bearer ';
    const auth = req.header('Authorization');
  
    if (!auth) { // nothing to see here
      next();
    } else if (auth.startsWith(prefix)) {
      const token = auth.slice(prefix.length);
      console.log("tokeN", JWT_SECRET);
      try {
        const {id} = jwt.verify(token, JWT_SECRET);
        console.log("id", id);
        if (id) {
          req.user = await getUserById(id);
          next();
        }
      } catch ({ name, message }) {
        next({ name, message });
      }
    } else {
      next({
        name: 'AuthorizationHeaderError',
        message: `Authorization token must start with ${ prefix }`
      });
    }
  });




  router.use((error,req,res,next) => {
    res.send({name:error.name,
        message:error.message})
})


module.exports = router;