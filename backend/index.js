const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./utils/db');
const userRoutes = require('./routes/user.route');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api/users', userRoutes);

connectDB(process.env.MONGODB_URI)
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});