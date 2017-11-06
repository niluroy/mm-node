/**
 * Message api models
 */

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    id: Number,
    user: String,
    picUrl: String,
    text: String,
    type: String,
    status: String,
    contentType: String,
    contentData: {
        data: [String]
    },
    responseData: {
        data: [String]
    },
    lastUpdateTime: Date
});

// Compile model from schema
var Message = mongoose.model('Message', MessageSchema);

module.exports = Message;