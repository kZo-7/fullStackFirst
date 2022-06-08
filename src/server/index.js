// const express = require("express"); // load express
import express from "express";
// const apiCall = require("./apiCall");
import { apiCall } from "./apiCall.js";
import cors from 'cors'

export const app = express(); //create an object (Express app) 
app.use(cors());
const port = 5000;

app.use(express.json()); 

app.listen(port, function() {   //starts up the server on a specific port
    console.log(`app listening on port ${port}`);
});

apiCall();