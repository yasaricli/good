var root = this;

root.SessionGetBase = function(sessionKey, extendObj) {
    var self = this;
    this.sessionKey = sessionKey;

    // close set false session
    this.close = function() {
        Session.set(this.sessionKey, false);
    };

    // get session
    this.get = function() {
        return Session.get(this.sessionKey);
    };

    // Extend Object
    _.each(extendObj, function(fn, name) {
        self[name] = fn.bind(self)
    });
};


root.Lightbox = new SessionGetBase('lightbox', {
    open: function(type, message) {
        Session.set(this.sessionKey, {
            type: type,
            message: message
        });
    },
    warning: function(message) {
        this.open('warning', message);
    }
});

root.PhotoEdit = new SessionGetBase('photoEdit', {
    open: function(photo) {
        Session.set(this.sessionKey, {
            data: photo
        });
    },
    photo: function(obj) {
        var get = this.get();
        if (get) {
            return (new FS.File(get.data));
        }
    }
});
