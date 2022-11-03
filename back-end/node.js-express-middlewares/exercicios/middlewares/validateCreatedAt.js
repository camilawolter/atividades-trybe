module.exports = (req, res, next) => {
  const { createdAt } = req.body.description;

  const formatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!formatDate.test(createdAt)) {
    return res.status(400).json({ message: 'o campo deve ter formato válido'});
  }

  next();
};