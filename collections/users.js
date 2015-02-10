Users = Meteor.users;

Users.helpers({
    photos: function() {
        return Photos.find({ userId: this._id }, { sort: { uploadedAt: -1 }});
    },
    avatar: function() {
        var avatar = Avatars.findOne({ userId: this._id }, { sort: { uploadedAt: -1 } });
        return avatar ? avatar.url() : '/avatar.png';
    }
});

// HOOKS
Users.before.insert(function(userId, doc) { });
