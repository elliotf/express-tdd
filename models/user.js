var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  firstName: String
});

var Model = module.exports = mongoose.model('User', ModelSchema);
