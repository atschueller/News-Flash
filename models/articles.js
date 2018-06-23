var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
    title: {
    type: String,
    trim: true,
    required: "String is Required"
    },
    summary: {
    type: String,
    trim: true,
    required: "String is Required"
    },
    link: {
    type: String,
    trim: true,
    required: "String is Required"
    }
});
var Articles = mongoose.model("Article", ArticleSchema);

module.exports = Articles;
