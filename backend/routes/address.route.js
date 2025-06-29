const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authenticateuser');
const addressController = require('../controller/address.controller');

router.post('/', authenticateUser, addressController.createAddress);
router.delete('/:id', authenticateUser, addressController.deleteAddress);

module.exports = router;
