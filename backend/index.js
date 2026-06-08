// eslint-disable-next-line no-undef
require('dotenv').config();
// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const session = require('express-session');
// eslint-disable-next-line no-undef
const cors    = require('cors');

const app = express();


app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,               
}));

app.use(express.json());

app.use(session({
  secret: 'your-secret-key',  
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,            
    secure: false,             
    maxAge: 1000 * 60 * 60 * 24, 
  },
}));


// eslint-disable-next-line no-undef
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.listen(4000, () => console.log('Backend running on http://localhost:4000'));