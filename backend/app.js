const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("connected to database"))
  .catch((e) => console.log("error connecting"+ e));

module.exports = app;