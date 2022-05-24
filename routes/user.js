var express = require('express');
var router = express.Router();
var UserController = require('../Controller/UserController');

router.get('/', UserController.GetUser );
router.post('/AddUser', UserController.AddUser );
router.get('/FilterBooks', UserController.FilterBooks );



module.exports = router;