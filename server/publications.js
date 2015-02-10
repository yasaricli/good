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
            return Photos.find({ userId: this.userId });
        },
        children: [

            // Users
            {
                find: function() {
                    return Users.find({ _id: this.userId });
                },

                // User avatar
                children: [
                    {
                        find: function() {
                            return Avatars.find({ userId: this._id });
                        }
                    }
                ]
            }
        ]

    }
});
