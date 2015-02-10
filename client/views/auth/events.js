Template.login.events({
    'submit #LoginForm': function(event, t) {
        var username = _.str.trim(t.find('#username').value),
            password = _.str.trim(t.find('#password').value);
        if (username && password) {
            Meteor.loginWithPassword(username, password, function(err) {
                if (err) return Lightbox.warning(err.reason);

                // Go to photos page
                Router.go('Photos');
            });
        } else {

            // error
            Lightbox.warning('Your username or password was incorrect.');
        }
        event.preventDefault();
    }
});

Template.profile.events({
    'click .avatar': function(event) {
        var options = {
            quality: 100,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        };

        MeteorCamera.getPicture(options, function(error, data) {
            var newFile = new FS.File(data);
            if (data) {
                Avatars.insert(newFile);
            }
        });
        event.preventDefault();
    }
});
