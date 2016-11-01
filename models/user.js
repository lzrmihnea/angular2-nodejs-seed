/**
 * Created by Mihnea on 5/2/2015.
 */

var mongoose = require('mongoose');
var validEmail = require('../helpers/validate/email');

// Optional: var schema = new mongoose.Schema({
var schema = mongoose.Schema({
    _id: {
        type:String,
        lowercase:true,
        trim:true,
        //validate:validEmail,
        required:"Please enter email address"
    },
    name: String,
    salt: {type:String, required:true},
    hash: {type:String, required:true},
    created: {type:Date, default:Date.now}
});
module.exports = mongoose.model('User', schema);