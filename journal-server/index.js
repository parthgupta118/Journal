const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const connectDB = require('./config/db');

//Routes import
const articles = require('./routes/articles');
const users = require('./routes/users');
const auth = require('./routes/auth'); 

const express = require("express");
const app = express();

app.use(cors())

app.use(express.json());

console.log(config.get("jwtPrivateKey"));

if (!config.get("jwtPrivateKey")) {
  console.error("Fatal ERROR: jwtPrivateKey is not defined. ");
  process.exit(1);
}

// Connect Database
connectDB();

app.use(express.json());
app.use(express.static('uploads'));
app.use('/api/users', users);
app.use('/api/articles', articles);
app.use('/api/auth', auth);


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
