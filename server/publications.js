Meteor.publishComposite('photos', function(fileerId) {
    return {
        find: function() {
            return Photos.find({ userId: this.userId });
        }
    }
});
