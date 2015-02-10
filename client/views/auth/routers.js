Router.route('/login', {
    name: 'Login',
    template: 'login',
    layoutTemplate: 'authLayout'
});

Router.route('/register', {
    name: 'Register',
    template: 'register',
    layoutTemplate: 'authLayout'
});

Router.route('/profile/:username', {
    name: 'Profile',
    template: 'profile',
    authenticated: true,
    waitOn: function() {
        return Meteor.subscribe('user', this.params.username);
    },
    data: function() {
        var params = this.params;
        return {
            profile: function() {
                return Users.findOne({ username: params.username });
            }
        }
    }
});
