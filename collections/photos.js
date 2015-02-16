Photos = new FS.Collection("photos", {
    stores: [
        new FS.Store.GridFS("photos"),
        new FS.Store.GridFS("50X50", {
            transformWrite: function(fileObj, readStream, writeStream) {
                gm(readStream, fileObj.name())
                    .resize('50^', '50^')
                    .gravity('Center')
                    .crop(50, 50)
                    .stream().pipe(writeStream);
            }
        }),
        new FS.Store.GridFS("100X100", {
            transformWrite: function(fileObj, readStream, writeStream) {
                gm(readStream, fileObj.name())
                    .resize('100^', '100^')
                    .gravity('Center')
                    .crop(100, 100)
                    .stream().pipe(writeStream);
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
Photos.files.before.insert(function(userId, doc) {
    doc.userId = userId;
});
