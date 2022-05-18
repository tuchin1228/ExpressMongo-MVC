var express = require('express');
var router = express.Router();
var EmployeeController = require('../Controller/EmployeeController');

router.get('/', EmployeeController.GetEmployee );
router.post('/addEmployee', EmployeeController.AddEmployee)

module.exports = router;