const express = require('express');
const router = express.Router();
const { createAppointment } = require('../controller/appointment.controller');
const authenticateUser = require('../middleware/authenticateuser');

router.post('/api/appointments', authenticateUser, createAppointment);

module.exports = router;
