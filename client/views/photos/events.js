Template.editPhoto.events({
    'click .share': function(event, t) {
        var photo = t.find('.filter').src;
        if (photo) {
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
