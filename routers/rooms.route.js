const express = require('express');
const router = express.Router();
const controller= require('../controllers/rooms.controller')

router.post('/create', controller.createRoom);


module.exports = router;