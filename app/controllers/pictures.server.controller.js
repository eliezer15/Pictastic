var Picture = require('mongoose').model('Picture');
var TempPicture = require('mongoose').model('TempPicture');
var storage = require('../../lib/StorageProvider/S3StorageProvider');

exports.upload = function(req, res, next) {
    //Validate that it contains the file name w
    storage.putObject(req.body)
        .then(function(data) {
            var tempParams = {
                title: req.body.fileName,
                album: req.album.id,
                uploadUrl: data.uploadUrl
            };
            var tempPicture = new TempPicture(tempParams);
            tempPicture.save(function (err) {
                if (err) {
                    return next(err);
                }
                else {
                    res.json(data);
                }
            });

        }, function(err) {
            return next(err);
        });
};