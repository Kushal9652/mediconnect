const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./utils/db');
const userRoutes = require('./routes/user.route');
const appointmentRoutes = require('./routes/appointment.route');


dotenv.config();

const app = express();
//middlewares
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 3000;

app.use('/api/auth', userRoutes);
app.use(appointmentRoutes);

connectDB(process.env.MONGODB_URI)
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Global error handler for JSON parse errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: 'error!' });
  }
  next(err);
});