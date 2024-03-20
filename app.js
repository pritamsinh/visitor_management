const express = require('express');
const bodyParser = require('body-parser')

const app = express();
var cors = require('cors')


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
const employeeRoute = require('./routes/employee');
const visitorRoute = require('./routes/visitor');
const assestsRoute = require('./routes/assests')
const assestacqRoute = require('./routes/assestacq')
// app.use(cors())
// Define CORS options
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your actual frontend domain
    credentials: true // Allow credentials
  };
  
  // Use CORS middleware with options
  app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/employee", employeeRoute);
app.use("/visitor", visitorRoute);
app.use("/assests", assestsRoute);
app.use("/assestacq", assestacqRoute);
const PORT =  3000;
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;