const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const employeeRoute = require('./routes/employee')

app.use(bodyParser.json());
app.use("/employee", employeeRoute);

module.exports = app;