Template.editPhoto.events({
    'click .share': function(event, t) {
        var photo = PhotoEdit.photo();
        if (photo) {
            photo.desc = t.find('#desc').value;
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
