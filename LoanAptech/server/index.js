const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();


connectDB();

// Middleware
const corsOptions = {
  origin: [
    'http://localhost:5173', // Keep this for your local development
    'https://loan-aptech-git-main-abdulmuizsalawu13-9796s-projects.vercel.app', // Your specific preview URL
    'https://loanaptech-9b30.onrender.com',  // Your production URL
    'https://loan-aptech-2grdtbr5t-abdulmuizsalawu13-9796s-projects.vercel.app/' // Another preview URL
  ],
  credentials: true, // Required if you are sending cookies/sessions
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser()); 

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/loans', require('./routes/loans'));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});