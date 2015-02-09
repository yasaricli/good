var root = this;

root.Lightbox = {
    sessionKey: 'lightbox',
    open: function(type, message) {
        Session.set(this.sessionKey, {
            type: type,
            message: message
        });
    },
    close: function() {
        Session.set(this.sessionKey, false);
    },
    get: function() {
        return Session.get(this.sessionKey);
    },
    warning: function(message) {
        this.open('warning', message);
    }
};
