Template.footer.events({
    'click .photo': function(event) {
        MeteorCamera.getPicture({ quality: 100 }, function (error, data) {
            var newFile = new FS.File(data);
            if (data) {
                Photos.insert(newFile);
            }
        });
    }
});

Template.lightbox.events({
    'click .close': function(event) {
        Lightbox.close();
    }
});
