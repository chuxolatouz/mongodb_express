'use strict';
const mongoose = require('mongoose');
const Talk = mongoose.model('Talk');

exports.index = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  Talk.find({}, function(err, talk){
    res.send(talk)
  })
};

exports.create = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  Talk.create(req.body, function(err, newTalk){
    if (err) {
      console.log(err)
    } else {
      res.send(newTalk)
    }
  })
}
