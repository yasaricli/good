var TemplateHelpers = {
    session: function(name) {
        return Session.get(name);
    },
    isActiveRoute: function(template) {
        var currentRoute = Router.current();
        return currentRoute && template === currentRoute.lookupTemplate() ? 'active' : '';
    },
    toUpperCase: function(text) {
        return text.toUpperCase();
    },
    toLowerCase: function(text) {
        return text.toLowerCase();
    },
    you: function(userId) {
        var user = Meteor.user();
        if (user) {
            return user._id == userId ? 'you' : '';
        }
    }
};

// Register Helpers all templates
_.each(TemplateHelpers, function(fn, name) {
    Template.registerHelper(name, fn);
});

Template.lightbox.helpers({
    data: function() {
        return Lightbox.get();
    }
});
