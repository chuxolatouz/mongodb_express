var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema = new Schema({
  name: { type: String, default: '' },
  capacity: { type: Number, default: 0}
});

mongoose.model('Room', RoomSchema);
