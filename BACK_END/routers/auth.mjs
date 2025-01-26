import express from 'express';
import { signup, login } from '../controllers/authController.mjs'; // Adjust path if needed
const router = express.Router();

// User Signup Route
router.post('/signup', signup);

// User Login Route
router.post('/login', login);

export default router;
