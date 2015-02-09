Meteor.publishComposite('user', function(username) {
    return {
        find: function() {
            return Users.find({ username: username });
        }
    }
});

Meteor.publishComposite('photos', function(fileerId) {
    return {
        find: function() {
            return Photos.find({ userId: this.userId });
        }
    }
});
