const User = require('../models/user');

// Create a new object
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error de servidor' });
  }
};

// Retrieve objects (with the condition)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(req.query);
    res.status(200).json(users);
    //res.status(200).json({ message: 'Lista de usuarios' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error de servidor' });
  }
};

// Retrieve a single object
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error de servidor' });
  }
};

// Update an object
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error de servidor' });
  }
};

// Delete an object
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error de servidor' });
  }
};

// Find all objects by condition
exports.findUsersByCondition = async (req, res) => {
  try {
    const users = await User.find(res.body);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error de servidor' });
  }
};