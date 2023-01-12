require('dotenv').config()

const {PORT = 8080} = process.env;
const express = require("express");
const server = express();
const cors = require("cors")
server.use(cors())
const morgan = require("morgan");
server.use(morgan("dev"));

server.use(express.json());
const {client} = require('./db')
client.connect();


const router = require('./api');
server.use('/api',router);


server.use((req,res,next) => {
    

    next();
})







server.listen(PORT,() => {
    console.log("The server is up on",PORT)
})