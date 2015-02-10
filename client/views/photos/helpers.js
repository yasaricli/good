Template.photos.helpers({
    photos: function() {
        return Photos.find({}, { sort: { uploadedAt: -1 }});
    },
    user: function() {
        return Users.findOne(this.userId);
    }
});

Template.editPhoto.helpers({});
