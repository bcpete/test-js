var db = require('./db.js');


module.exports.handleSignup = (email, password) => {
  // Check if the email exists
  db.saveUser({email, password});
  // Send the welcome email
};