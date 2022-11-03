const express = require('express');
const auth = require('../exercicio-um/middlewares/auth');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');

const app = express;

app.use(express.json());

app.post('/activities', 
  auth,
  validateName, 
  validatePrice, 
  validateDescription, 
  validateCreatedAt, 
  validateRating, 
  validateDifficulty, 
  (_req, res) => {
  res.status(201).json({ message: 'atividade registrada com sucesso!' });
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'campos ausentes' });
  }

  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = app;