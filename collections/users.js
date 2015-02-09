Users = Meteor.users;

Users.helpers({
    photos: function() {
        return Photos.find({ }, { sort: { uploadedAt: -1 }});
    }
});
