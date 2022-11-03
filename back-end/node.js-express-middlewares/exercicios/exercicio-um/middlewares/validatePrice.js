module.exports = (req, res, next) => {
  const { price } = req.body;

  if (price === undefined) {
    return res.status(400).json({ message: 'o campo price é obrigatótio'});
  }

  if (price < 0 || typeof price != 'number') {
    return res.status(400).json({ message: 'o campo deve ser um número ou igual a zero' });
  }

  next();
}