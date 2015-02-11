Template.footer.events({
    'click .photo': function(event) {
        MeteorCamera.getPicture({ quality: 100 }, function(error, data) {
            var newFile = new FS.File(data);
            if (data) PhotoEdit.open(data);
        });

        // prevent default
        event.preventDefault();
    }
});

Template.lightbox.events({
    'click .close': function(event) {
        Lightbox.close();
    }
});
