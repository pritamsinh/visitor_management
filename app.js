const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const employeeRoute = require('./routes/employee');
const visitorRoute = require('./routes/visitor')

app.use(bodyParser.json());
app.use("/employee", employeeRoute);
app.use("/visitor", visitorRoute)

module.exports = app;