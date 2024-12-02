const db = require('../db');

// Create a model from the schema
const User = db.model('User', {
  username: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  status: String
});

module.exports = User;
