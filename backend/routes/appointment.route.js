const express = require('express');
const router = express.Router();
const { createAppointment } = require('../controller/appointment.controller');
const requireLogin = require('../middleware/requireLogin');

// Create a new appointment
router.post('/api/appointments', requireLogin, createAppointment);

module.exports = router;
