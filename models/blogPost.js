/**
 * Created by Mihnea on 5/2/2015.
 */

var mongoose = require('mongoose');
require('express-mongoose');
var User = mongoose.model('User');
var BlogPostTag = mongoose.model('BlogPostTag');
var moment = require('moment');

// Optional: var schema = new mongoose.Schema({
var schema = mongoose.Schema({
    _id: String,
    title: {type: String, trim: true},
    created: {type: Date, default: Date.now},
    body: String,
    author: {type: String, ref: 'User'},
    tags: [{type: String, ref: 'BlogPostTag'}]
});

// Used directly in jade calls
schema.virtual('formattedDate').get(function () {
    return moment(this.created).format('ddd, Do MMM YYYY');
});

schema.statics.findComments = function (id, callback) {
    return this.model('Comment').find({post: id}, callback);
}

// Used in JS computations
schema.methods.getFormattedMonth= function () {
    return moment(this.created).format('MMM');
}

schema.statics.edit = function (req, callback) {
    var id = req.params.id;
    var author = req.session.user;

    // Validate if current user authored this blogpost
    var query = {_id: id, author: author};

    var update = {};
    update.title = req.body.title;
    update.body = req.body.blogPostBody;

    this.update(query, update, function (err, numAffected) {
        if (err) return callback(err);

        if (0 == numAffected) {
            return callback(new Error('No post to modify'));
        }

        callback();
    })
}

//compile the model
module.exports = mongoose.model('BlogPost', schema);

//TODO
// When new blogposts are created, lets tweet
// npm install mongoose-lifecycle
// http://plugins.mongoosejs.com?q=events
var lifecycle = require('mongoose-lifecycle');
schema.plugin(lifecycle);

// Compile the model
var BlogPost = mongoose.model('BlogPost', schema);

// Handle events
BlogPost.on('afterInsert', function (post) {
    // fake tweet this
    var url = "http://localhost:3000/a/";
    console.log("Read my new blog post! %s%s", url, post.id);
});

// Clean up comments
BlogPost.on('afterRemove', function (post) {
    this.model('Comment').remove({post: post._id}).exec(function (err) {
        if (err) {
            console.error('Had trouble cleaning up old comments.', err.stack);
        }
    });
});
