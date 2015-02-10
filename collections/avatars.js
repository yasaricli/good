Avatars = new FS.Collection("avatars", {
    stores: [
        new FS.Store.GridFS("avatars", {
            transformWrite: function(fileObj, readStream, writeStream) {
                // Transform the image into a 100x100px thumbnail
                gm(readStream, fileObj.name()).resize('100', '100', '!').autoOrient().stream().pipe(writeStream);
            }
        })
    ],
    filter: {
        allow: {
            contentTypes: ['image/*'] // allow only images in this FS.Collection
        }
    }
});


// HOOKS
Avatars.files.before.insert(function(userId, doc) {
    doc.userId = userId;
});
