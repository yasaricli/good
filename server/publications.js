Meteor.publishComposite('user', function(username) {
    return {
        find: function() {
            return Users.find({ username: username });
        },
        children: [

            // Photos
            {
                find: function() {
                    return Photos.find({ userId: this._id });
                }
            },

            // Avatars
            {
                find: function() {
                    return Avatars.find({ userId: this._id });
                }
            }
        ]
    }
});

Meteor.publishComposite('photos', function(fileerId) {
    return {
        find: function() {
            return Photos.find({ });
        },
        children: [

            // Users
            {
                find: function(photo) {
                    return Users.find({ _id: photo.userId });
                },

                // User avatar
                children: [
                    {
                        find: function(user, photo) {
                            return Avatars.find({ userId: user._id });
                        }
                    }
                ]
            },

            // Likes
            {
                find: function(photo) {
                    return Likes.find({ photoId: photo._id });
                }
            }
        ]

    }
});
