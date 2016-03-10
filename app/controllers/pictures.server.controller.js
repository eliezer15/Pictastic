var Picture = require('mongoose').model('Picture');
var storage = require('../../lib/StorageProvider/S3StorageProvider');

exports.upload = function(req, res, next) {
    //Validation
    var fileToUpload = req.file;

    storage.upload(req.album, fileToUpload)
        .then(createPicture)
        .then(function(model) {
            res.json(model);
        });
};

function createPicture(picture) {
    return new Promise(function (resolve, reject) {
        var pictureModel = new Picture(picture);
        pictureModel.save(function (err) {
            if (err) {
                reject(Error(err));
            }
            else {
                resolve(pictureModel);
            }
        });
    });
}