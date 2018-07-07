var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//This schema defines the "Script" model. The Script model in turn, contains the full name of the character on the script,
//and an array of the randomly generated sentences on their script.
var ScriptSchema = new Schema(
  {
    full_name: {type: String, required: true, max: 100},
    script: [String]
  }
);

module.exports = mongoose.model('Script', ScriptSchema);
