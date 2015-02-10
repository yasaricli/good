Template.photos.helpers({
    user: function() {
        return Users.findOne(this.userId);
    }
});

Template.editPhoto.helpers({});
