const express = require('express');

const app = express();

const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (err) {
    console.error(`Arquivo não pode ser lido: ${err}`);
  }
};

module.exports = app;