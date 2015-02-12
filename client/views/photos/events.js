Template.photos.events({
    'click .like': function(event, t) {
        var filter = { photoId: this._id, userId: Meteor.userId() },
            liked = Likes.findOne(filter);
        if (liked) {
            Likes.remove(liked._id);
        } else {
            Likes.insert(filter);
        }
        event.preventDefault();
    },
});

Template.editPhoto.events({
    'click .share': function(event, t) {
        var photo = new FS.File(t.find('.filter').src);
        if (photo.data) {

            // current Location
            photo.location = Geolocation.latLng();

            // insert Photo
            Photos.insert(photo, function() {
                PhotoEdit.close();
            });
        }
        event.preventDefault();
    },
    'click .close': function(event, t) {
        PhotoEdit.close();
        event.preventDefault();
    }
});
