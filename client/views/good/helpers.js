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
    toFirstUpperCase: function(text) {
        return text.toUpperCase()[0];
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
