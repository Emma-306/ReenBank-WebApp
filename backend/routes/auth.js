// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const bcrypt = require('bcryptjs');

const router = express.Router();


const users = new Map();       
const pendingOtps = new Map(); 

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function generateAccountNumber() {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

function safeUser(user) {
  return { name: user.name, email: user.email, accountNumber: user.accountNumber };
}

 
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (users.has(email) && users.get(email).verified) {
    return res.status(409).json({ message: 'Email already registered' });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const otp = generateOtp();
  const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

  users.set(email, {
    name,
    email,
    passwordHash,
    verified: false,
    accountNumber: generateAccountNumber(),
  });
  pendingOtps.set(email, { otp, expiresAt, type: 'register' });
  req.session.pendingEmail = email;

  console.log(`[OTP] Registration OTP for ${email}: ${otp}`);

  res.json({ message: 'OTP sent to your email' });
});

 
router.post('/verify-otp', (req, res) => {
  const { otp } = req.body;
  const email = req.session.pendingEmail;

  if (!email) {
    return res.status(400).json({ message: 'No pending registration found. Please register again.' });
  }

  const record = pendingOtps.get(email);

  if (!record || record.type !== 'register') {
    return res.status(400).json({ message: 'OTP not found. Please register again.' });
  }

  if (Date.now() > record.expiresAt) {
    pendingOtps.delete(email);
    return res.status(400).json({ message: 'OTP expired. Please request a new one.' });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  const user = users.get(email);
  user.verified = true;
  pendingOtps.delete(email);
  req.session.pendingEmail = null;
  req.session.userId = email;

  res.json({ message: 'Email verified successfully', user: safeUser(user) });
});

 
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = users.get(email);

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  if (!user.verified) {
    return res.status(401).json({ message: 'Please verify your email before logging in' });
  }

  const match = await bcrypt.compare(password, user.passwordHash);

  if (!match) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  req.session.userId = email;

  res.json({ message: 'Login successful', user: safeUser(user) });
});

 
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ message: 'Logged out successfully' });
  });
});

 
router.get('/me', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  const user = users.get(req.session.userId);

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  res.json({ user: safeUser(user) });
});


router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

 
  const user = users.get(email);

  if (user && user.verified) {
    const otp = generateOtp();
    const expiresAt = Date.now() + 10 * 60 * 1000;
    pendingOtps.set(email, { otp, expiresAt, type: 'reset' });
    req.session.resetEmail = email;
    req.session.resetVerified = false;
    console.log(`[OTP] Password reset OTP for ${email}: ${otp}`);
  }

  res.json({ message: 'If this email is registered, an OTP has been sent' });
});

 
router.post('/verify-reset-otp', (req, res) => {
  const { otp } = req.body;
  const email = req.session.resetEmail;

  if (!email) {
    return res.status(400).json({ message: 'No password reset in progress' });
  }

  const record = pendingOtps.get(email);

  if (!record || record.type !== 'reset') {
    return res.status(400).json({ message: 'OTP not found. Please request a new one.' });
  }

  if (Date.now() > record.expiresAt) {
    pendingOtps.delete(email);
    return res.status(400).json({ message: 'OTP expired. Please request a new one.' });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  pendingOtps.delete(email);
  req.session.resetVerified = true;

  res.json({ message: 'OTP verified' });
});

 
router.post('/reset-password', async (req, res) => {
  const { password } = req.body;
  const email = req.session.resetEmail;

  if (!email || !req.session.resetVerified) {
    return res.status(400).json({ message: 'Unauthorized. Please complete OTP verification first.' });
  }

  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }

  const user = users.get(email);
  user.passwordHash = await bcrypt.hash(password, 10);

  req.session.resetEmail = null;
  req.session.resetVerified = false;

  res.json({ message: 'Password reset successfully' });
});

 
router.post('/resend-otp', async (req, res) => {
  const email = req.session.pendingEmail || req.session.resetEmail;

  if (!email) {
    return res.status(400).json({ message: 'No pending OTP session found' });
  }

  const existingRecord = pendingOtps.get(email);
  const type = existingRecord ? existingRecord.type : 'register';

  const otp = generateOtp();
  const expiresAt = Date.now() + 10 * 60 * 1000;
  pendingOtps.set(email, { otp, expiresAt, type });

  console.log(`[OTP] Resent OTP for ${email}: ${otp}`);

  res.json({ message: 'OTP resent' });
});

// eslint-disable-next-line no-undef
module.exports = router;
