//We will design a serverless function system to store the data in a database, send an email notification about the data saved on the database
//We will integrate message console to the front-end about (message loading, form submitted successfully) for optimized user experience
//We will integrate localStorage for data persistency 
require("dotenv").config()
const mongoose = require ('mongoose');
const express = require ('express');
const cors = require ('cors');
const connectDB = require ('./db.js');
const router = require ('./api/formAPI.js');

const app = express();
const PORT = 3000;

//connect to DB
connectDB();

//set up middlewares
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded data

app.use(no-cors({ origin: "http://localhost:3000" })); // Adjust the origin to match your frontend


//routes
app.post ("/api/submit", router);

//start server
app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);
});