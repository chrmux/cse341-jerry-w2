const User = require("../models/users");

exports.createUser = async (req, res) => {
    if (!req.body.username || !req.body.password) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }

    const user = new User(req.body);
    user
      .save()
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the user.'
        });
      });
  };
  

  exports.findAll = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint get all users'
  
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: error
      });
    }
  };
  
  exports.deleteUser = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.description = 'Endpoint delete a user'
  
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: error
      });
    }
  };
  
  exports.updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const user = await User.findByIdAndUpdate(id, data);
      res.status(204).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: error
      });
    }
  }