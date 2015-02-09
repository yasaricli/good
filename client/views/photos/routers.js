Router.route('/photos', {
    name: 'Photos',
    template: 'photos',
    waitOn: function() {
        return Meteor.subscribe('photos');
    }
});
