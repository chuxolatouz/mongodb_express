'use strict';
const mongoose = require('mongoose');
const Room = mongoose.model('Room');

exports.index = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  Room.find({}, function(err, rooms){
    res.send(rooms)
  })
};

exports.create = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  Room.create(req.body, function(err, newRoom){
    if (err) {
      console.log(err)
    } else {
      res.send(newRoom)
    }
  })
}
