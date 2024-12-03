const User = require('../models/User');

module.exports.signup_get = (req, res) => {
  res.render('signup');
};

module.exports.login_get = (req, res) => {
  res.render('login');
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    console.error('Error creating new user:', err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  res.send('user login');
};
