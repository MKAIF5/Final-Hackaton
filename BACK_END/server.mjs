import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectDB from './config/db.mjs';
import authRoutes from './routers/auth.mjs';

// Load environment variables
config();

// Initialize app
const app = express();

// Connect to DB


// Middleware
app.use(cors());
app.use(json());  // For parsing application/json

// Routes
app.use('/api/auth', authRoutes);


// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
