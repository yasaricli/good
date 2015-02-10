Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    onBeforeAction: function() {
        var options = this.route.options,
            authenticate = options['authenticated'],
            redirectLoggedInUsers = options['redirectLoggedInUsers'];

        // defaults
        Lightbox.close();

        if (redirectLoggedInUsers && Meteor.user()) {
            // redirect login page
            this.redirect('Photos');

            // next false.
            return;
        }

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
    layoutTemplate: 'authLayout',
    redirectLoggedInUsers: true
});
