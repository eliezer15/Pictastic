var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var config = require('../../config/config');
var fs = require('fs');

var bucket = config.s3_bucket;
var delimiter = '/';

exports.upload = function(album, fileToUpload) {
    return new Promise(function (resolve, reject) {
        var key = album.id + delimiter + fileToUpload.originalname;

        var params = {
            Bucket: bucket,
            Key: key,
            ContentType: 'application/octet-stream',
            Body: fileToUpload.buffer,
            ACL: 'public-read'
        };

        s3.upload(params, function(err, s3File) {
            if (err) {
                reject(Error(err));
            }
            else {
                getFileMetadata(s3File)
                    .then(function(s3Metadata) {
                        resolve ({
                            title: fileToUpload.originalname,
                            sizeInKb: s3Metadata.ContentLength / 1024,
                            url: s3File.Location,
                            album: album
                        });
                    })

            }
        });

    });
};

function getFileMetadata(file) {
    return new Promise(function(resolve, reject) {
        var params = {
            Bucket: bucket,
            Key: file.key
        };

        s3.headObject(params, function(err, metadata) {
            if (err) {
                reject(Error(err));
            }
            else {
                resolve(metadata);
            }
        });
    });
}

