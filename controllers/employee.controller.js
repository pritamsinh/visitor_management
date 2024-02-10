const models = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Validator = require('fastest-validator');


function signUp(req, res) {
    //For validating data using fastest-validator npm package
    const schema = {
        name: { type: "string", optional: false, max: "100" },
        email: { type: "string", optional: false },
        password: { type: "string", optional: false }
    }
    const v = new Validator();
    const validationResponse = v.validate({name: req.body.name, email: req.body.email, password: req.body.password}, schema);
    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed!!!",
            errors: validationResponse
        })
    }

    models.Employee.findOne({ where: { email: req.body.email } })
        .then((result) => {
            if (result) {
                res.status(409).json({
                    message: "Email already in use. Try again with different email",
                }); //conflict
            } else {
                bcryptjs.genSalt(10, function (err, salt) {
                    bcryptjs.hash(req.body.password, salt, function (err, hash) {
                        const employee = {
                            name: req.body.name,
                            email: req.body.email,
                            password: hash,
                            phone: req.body.phone,
                            designation: req.body.designation,
                        };
                        models.Employee.create(employee)
                            .then((result) => {
                                res.status(200).json({
                                    message: "User registered successfully",
                                });
                            })
                            .catch((error) => {
                                res.status(500).json({
                                    message: "Something went wrong!",
                                });
                            });
                    });
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                message: "Something went wrong!"
            });
        });
}


function login(req, res) {

    //For validating data using fastest-validator npm package
    const schema = {
        email: { type: "string", optional: false },
        password: { type: "string", optional: false }
    }
    const v = new Validator();
    const validationResponse = v.validate({email: req.body.email, password: req.body.password}, schema);
    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed!!!",
            errors: validationResponse
        })
    }

    models.Employee.findOne({ where: { email: req.body.email } }).then(employee => {
        if (employee === null) {
            res.status(401).json({
                message: "No such user exists!"
            });
        } else {
            bcryptjs.compare(req.body.password, employee.password, function (err, result) {
                if (result) {
                    const token = jwt.sign({
                        email: employee.email,
                        employeeId: employee.id
                    },  'secret', function (err, token) {
                        res.status(200).json({
                            message: "Authentication successful!!",
                            token: token
                        });
                    });
                } else {
                    res.status(401).json({
                        message: "Invalid credentials!"
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    })
}

module.exports = {
    signUp: signUp,
    login: login
};

