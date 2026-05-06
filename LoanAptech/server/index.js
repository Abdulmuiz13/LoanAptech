const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();


connectDB();

// Middleware
const allowedOrigins = [
  'http://localhost:5173', // Keep this for your local development
  'https://loan-aptech-git-main-abdulmuizsalawu13-9796s-projects.vercel.app', // Your specific preview URL
  'https://loan-aptech-2grdtbr5t-abdulmuizsalawu13-9796s-projects.vercel.app', // Another preview URL
  'https://loan-aptech-neon.vercel.app/', // Another preview URL
  process.env.CLIENT_URL // Add the actual frontend URL through environment variables
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS policy does not allow access from origin ${origin}`));
    }
  },
  credentials: true // Required if you are sending cookies/sessions
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