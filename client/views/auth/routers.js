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
    template: 'profile'
});
