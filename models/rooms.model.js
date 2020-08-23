var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomsSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    admin: String,
    members: [{type:Schema.Types.ObjectId,ref:"users"}],
    messages: [
        {
            sender: {type:Schema.Types.ObjectId,ref:"users"},
            time: Date,
            content: String
        }]
});

var roomModel = mongoose.model('rooms', roomsSchema, 'rooms')
module.exports = roomModel;