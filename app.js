const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const employeeRoute = require('./routes/employee');
const visitorRoute = require('./routes/visitor');
const assestsRoute = require('./routes/assests')

app.use(bodyParser.json());
app.use("/employee", employeeRoute);
app.use("/visitor", visitorRoute);
app.use("/assests", assestsRoute)

module.exports = app;