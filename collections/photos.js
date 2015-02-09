Photos = new FS.Collection("photos", {
    stores: [
        new FS.Store.GridFS("photos")
    ]
});

// HOOKS
Photos.files.before.insert(function(userId, doc) {
    doc.userId = userId;
});
