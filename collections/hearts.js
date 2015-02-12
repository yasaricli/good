Hearts = new Mongo.Collection('hearts');

Hearts.helpers({});

// HOOKS
Hearts.before.insert(function(userId, doc) {
    doc.userId = userId;
});
