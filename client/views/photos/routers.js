Router.route('/photos', {
    name: 'Photos',
    template: 'photos',
    authenticated: true,
    waitOn: function() {
        return Meteor.subscribe('photos');
    }
});
