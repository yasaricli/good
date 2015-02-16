Template.photos.helpers({
    photos: function(userId) {
        var filter = userId ? { userId: userId } : {};
        return Photos.find(filter, { sort: { uploadedAt: -1 }});
    },
    user: function() {
        return Users.findOne(this.userId);
    },
    liked: function() {
        return Likes.findOne({ userId: Meteor.userId(), photoId: this._id });
    },
    likes: function() {
        return Likes.find({ photoId: this._id });
    }
});

Template.editPhoto.helpers({
    photo: function() {
        return PhotoEdit.get();
    }
});
