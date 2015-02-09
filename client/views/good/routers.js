Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/', {
    name: 'Home',
    template: 'home',
    layoutTemplate: 'authLayout'
});
