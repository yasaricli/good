var TemplateHelpers = {
    session: function(name) {
        return Session.get(name);
    },
    isActiveRoute: function(template) {
        var currentRoute = Router.current();
        return currentRoute && template === currentRoute.lookupTemplate() ? 'active' : '';
    }
};

// Register Helpers all templates
_.each(TemplateHelpers, function(fn, name) {
    Template.registerHelper(name, fn);
});

Template.photos.helpers({
    photos: function() {
        return Photos.find({});
    }
});

