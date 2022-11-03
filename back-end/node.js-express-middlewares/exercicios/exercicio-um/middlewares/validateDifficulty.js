module.exports = (req, res, next) => {
  const { difficulty } = req.body.description;

  const classifications = ['Fácil', 'Médio', 'Dificil'];

  if (!classifications.includes(difficulty)) {
    return req.status(400).json({message: 'o compo difficulty deve ser Fácil, Médio ou Dificil'});
  }

  next();
};