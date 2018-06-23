var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  noteTitle: String,
  noteBody: String
});

var NewNote = mongoose.model("Note", NoteSchema);

module.exports = NewNote;