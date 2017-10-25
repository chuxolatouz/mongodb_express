'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.index = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  User.find({}, function(err, users){
    res.send(users)
  })
};

exports.create = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  User.create(req.body, function(err, newUser){
    if (err) {
      console.log(err)
    } else {
      res.send(newUser)
    }
  })
}
