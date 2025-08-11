const router = require("express").Router();
const passport = require("passport");
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Manual student registration
router.post('/register/student', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'User already exists.' });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create user
    const user = await User.create({
      googleId: '', // Not using Google for manual registration
      name,
      email,
      role: 'student',
      password: hashedPassword,
    });
    res.status(201).json({ message: 'Student registered successfully.', user: { name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.log('Student registration error:', err);
    res.status(500).json({ error: 'Server error.' });
  }
});

// Login route
router.get("/google", (req, res, next) => {
  const { role } = req.query;
  req.session.role = role === "teacher" ? "teacher" : "student";
  next();
}, passport.authenticate("google", { scope: ["profile", "email"] }));

// Callback route
router.get("/google/callback", 
  passport.authenticate("google", {
    successRedirect: "http://localhost:5000/dashboard",
    failureRedirect: "http://localhost:5000/login",
  })
);

// Logout route
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("http://localhost:5000/");
  });
});

// Get current user
router.get("/current-user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
