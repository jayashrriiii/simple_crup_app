

const mongoose = require("mongoose");



const Schema = mongoose.Schema;

//Schema - set a format of document/data/record
const attenSchema = new Schema({
     stud_name: String,
     stud_gen: String,
     stud_email: String,
     stud_con: String
});

//Model - get a collection of database (and set our defined schema to it)
var AttenModel = mongoose.model("StudList", attenSchema);




module.exports = AttenModel;





