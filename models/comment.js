/**
 * Created by Mihnea on 5/2/2015.
 */

var mongoose = require('mongoose');
require('express-mongoose');
var User = require('mongoose').model('User');

// Optional: var schema = new mongoose.Schema({
var schema = mongoose.Schema({

    id:{type:String},
    text: {type:String, trim:true, validate:validateText},
    post: {type:String, index:true},
    created: {type: Date, default: Date.now},
    author: {type: String, ref: 'User'}
})

function validateText(str) {
    return str.length<250;
}


//compile the model
module.exports = mongoose.model('Comment', schema);

