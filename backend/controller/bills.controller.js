const Bill = require('../models/bills.model');
const User = require('../models/user.model');
const Address = require('../models/address.model');

exports.createBill = async (req, res) => {
  try {
    const { address, cost, medicines } = req.body;
    const userId = req.user.userId;
    if (!userId || !address || !cost || !medicines) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const newBill = new Bill({ user: userId, address, cost, medicines });
    const savedBill = await newBill.save();
    res.status(201).json(savedBill);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getBills = async (req, res) => {
  try {
    const userId = req.user.userId;
    const bills = await Bill.find({ user: userId }).populate('address');
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteBill = async (req, res) => {
  try {
    const billId = req.params.id;
    const userId = req.user.userId;
    const bill = await Bill.findOneAndDelete({ _id: billId, user: userId });
    if (!bill) {
      return res.status(404).json({ message: 'Bill not found' });
    }
    res.json({ message: 'Bill deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
