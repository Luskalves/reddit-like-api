function errorMiddleware(err, _req, res, _next) {
  const { name, message } = err;

  switch(name) {
    case '404':
      return res.status(404).json({ message })
    default:
      res.status(500).json({ message })
  }
};

module.exports = errorMiddleware;