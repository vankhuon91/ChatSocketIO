var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    user: String, // String is shorthand for {type: String}
    pass: String,
    name: String
});

var userModel=mongoose.model('users',usersSchema,'users')
module.exports=userModel;