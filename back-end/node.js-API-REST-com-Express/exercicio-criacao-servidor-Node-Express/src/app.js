const express = require('express');

const app = express();
app.use(express.json());

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

// listar um filme do JSON pelo id
app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const movie = movies.find(({ id }) => id === Number(req.params.id));
    
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// listar todos os filmes do JSON
app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();

    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// cadastrar um novo filme no JSON
app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);

    res.status(200).json(allMovies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// editar info de um filme do JSON
app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();
    const index = movies.findIndex((elem) => elem.id === Number(id));
    movies[index] = {
      id: Number(id),
      movie, 
      price,
    };
    const updateMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updateMovies);

    res.status(200).json(movies[index]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Deletar um filme do JSON
app.delete('/movies/;id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const filterMovies = movies.filter((movie) => movie.id !== Number(id));
    const updateMovies = JSON.stringify(filterMovies, null, 2);
    await fs.writeFile(moviesPath, updateMovies);

    res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;