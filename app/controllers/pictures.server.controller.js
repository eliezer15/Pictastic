var Picture = require('mongoose').model('Picture');
var storage = require('../../lib/StorageProvider/S3StorageProvider');

exports.upload = function(req, res, next) {
    //Validation
    var fileToUpload = req.file;

    storage.putObject(fileToUpload)
        .then(function(data) {
            var fileMetadata = storage.getObjectMetadata(data.key);
            var pictureModel = new Picture();
            //TODO: Fill out rest of the object, save, and return
        }, function(error) {
            next(error);
        });
};