var Picture = require('mongoose').model('Picture');
var TempPicture = require('mongoose').model('TempPicture');
var storage = require('../../lib/StorageProvider/S3StorageProvider');

exports.upload = function(req, res, next) {
    //Validation
    var file1 = req.file;

    storage.putObject(file1)
        .then(function(data) {
            console.log(data);
            res.json(data);
            //TODO: Create actual pic model
        }, function(error) {
            next(error);
        });
};