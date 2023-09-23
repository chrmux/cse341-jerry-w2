const firstPerson = (req, res, next) => {
    res.json('Catherine Marollano')
};


const secondPerson = (req, res, next) => {
    res.json('Jerry Marollano')
};


module.exports = {
    firstPerson,
    secondPerson,
    contacts
};