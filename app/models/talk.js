var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TalkSchema = new Schema({
  name: { type: String, default: '' },
  capacity: { type: Number, default: 0},
  speaker: { type: String, default: ''},
  room: { type: String, default: ''},
  date: { type: String, default: ''},
});

mongoose.model('Talk', TalkSchema);
