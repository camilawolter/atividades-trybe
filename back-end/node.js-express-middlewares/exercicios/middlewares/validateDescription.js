// module.exports = (req, res, next) => {
//   const { description } = req.body;

//   if (!description) {
//     return res.status(400).json({ message: 'o campo description é obrigatório' });
//   }

//   if (!description.createdAt) {
//     return res.status(400).json({ message: 'o campo createdAt é obrigatório' });
//   }

//   if (!description.rating) {
//     return res.status(400).json({ message: 'o campo rating é obrigatório' });
//   }

//   if (!description.difficulty) {
//     return res.status(400).json({ message: 'o campo difficulty é obrigatório' });
//   }

//   next();
// }

const validateDescription = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json({ message: `o campo ${value} é obrigatório` });
  }
};

module.exports = (req, res, next) => {
  const { description } = req.body;

  return validateDescription(description, res, 'description')
    || validateDescription(description.createdAt, res, 'createdAt')
    || validateDescription(description.rating, res, 'rating')
    || validateDescription(description.difficulty, res, 'difficulty')
    || next();
};