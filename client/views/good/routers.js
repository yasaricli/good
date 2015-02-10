Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    onBeforeAction: function() {
        var options = this.route.options,
            authenticate = options['authenticated'];

        // defaults
        Lightbox.close();

        // authenticated
        if (authenticate && !Meteor.user()) {

            // redirect login page
            this.redirect('Login');

            // next false.
            return;
        }

        // Next
        this.next();
    }
});

Router.route('/', {
    name: 'Home',
    template: 'home',
    layoutTemplate: 'authLayout'
});
