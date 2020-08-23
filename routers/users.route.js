const express = require('express');
const router = express.Router();
const controller= require('../controllers/users.controller')

router.post('/login', controller.login);
router.post('/signup', controller.signup);
router.get('/au', controller.au);


module.exports = router;