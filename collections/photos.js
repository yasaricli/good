Photos = new FS.Collection("photos", {
    stores: [
        new FS.Store.GridFS("photos")
    ],
    filter: {
        allow: {
            contentTypes: ['image/*'] // allow only images in this FS.Collection
        }
    }
});

// HOOKS
Photos.files.before.insert(function(userId, doc) {
    doc.userId = userId;
});
