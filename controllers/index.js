const firstPerson = (req, res) => {
  res.json('Catherine Marollano');
};

const secondPerson = (req, res) => {
  res.json('Jerry Marollano');
};

module.exports = {
  firstPerson,
  secondPerson
};
