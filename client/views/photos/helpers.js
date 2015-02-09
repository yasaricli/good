Template.photos.helpers({
    user: function() {
        return Users.findOne(this.userId);
    }
});
