const express = require('express');
const employeeController = require('../controllers/employee.controller')
const router = express.Router();

router.post('/sign-up', employeeController.signUp);
router.post('/login', employeeController.login);

module.exports = router;