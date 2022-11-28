const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = BookService.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found!' });

  res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BookService.create({ title, author, pageQuantity });
  res.status(201).json(book);
}

module.exports = {
  getAll,
  getById,
  create,
}