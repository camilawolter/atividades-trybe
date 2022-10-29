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

app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const movie = movies.find(({ id }) => id === Number(req.params.id));
    
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();

    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;