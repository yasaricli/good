Likes = new Mongo.Collection('likes');

Likes.helpers({});

// HOOKS
Likes.before.insert(function(userId, doc) {
    doc.createdAt = new Date();
});
