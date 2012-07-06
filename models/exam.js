var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  title: String
});

var Model = module.exports = mongoose.model('Exam', ModelSchema);
