'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.create = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  console.log(req.body)
  User.findOne({ email: req.body.email }, function(err, users){
    res.send(users)
  })
}
