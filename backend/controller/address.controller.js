const Address = require('../models/address.model');
const User = require('../models/user.model');

exports.createAddress = async (req, res) => {
  try {
    const { user, street, city, state, zip, phone } = req.body;

    if (!user || !street || !city || !state || !zip || !phone) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Validate user exists
    const userDoc = await User.findById(user);
    if (!userDoc) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const newAddress = new Address({
      user, // store ObjectId
      street,
      city,
      state,
      zip,
      phone
    });

    const savedAddress = await newAddress.save();
    res.status(201).json(savedAddress);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getAddresses = async (req, res) => {
  try {
    const { user } = req.body;
    if (!user) {
      return res.status(400).json({ message: 'User ObjectId is required in request body.' });
    }
    const addresses = await Address.find({ user });
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const addressId = req.params.id;
    const { user } = req.body;
    if (!user) {
      return res.status(400).json({ message: 'User ObjectId is required in request body.' });
    }
    const address = await Address.findOneAndDelete({ _id: addressId, user });
    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};