const handleError = (message, name) => {
  const erro = new Error(message);

  if (name) erro.name = name;

  throw erro
};

module.exports = handleError;