const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  birthday: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
},

});

module.exports = mongoose.model('Job', JobSchema)