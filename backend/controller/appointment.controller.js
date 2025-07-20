const Appointment = require('../models/appointment.model');
const User = require('../models/user.model');

exports.createAppointment = async (req, res) => {
  try {
    const { name, email, date, time } = req.body;
    const { id } = req.user;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

  
    const appointment = new Appointment({
      name,
      email,
      date: new Date(date),
      time,
      createdBy: {
        userId: user._id,
        userName: user.username,
      },
    });

    await appointment.save();
    res.status(201).json({ message: 'Appointment created successfully', appointment });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create appointment', error: error.message });
  }
};