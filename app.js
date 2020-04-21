const express = require("express");
const dotenv = require("dotenv");
const smsRoute = require("./index");
const ussdRoute = require("./ussd");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`running on localhost:${PORT}`));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use("/", ussdRoute);