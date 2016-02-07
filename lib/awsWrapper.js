var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var config = require('../config/config');
var bucket = config.s3_bucket;

exports.getChildren = function(path) {
    return new Promise(function(resolve, reject) {
        var params = {
            Bucket: bucket,
            Prefix: path
        };
        s3.listObjects(params, function (err, data) {
            if (err) {
                reject(Error(err));
            }
            else {
                 resolve(data);
            }
        });
    });
};

exports.sign_s3 = function(fileName, fileType) {
    return new Promise(function(resolve, reject) {
        var s3_params = {
            Bucket: bucket,
            Key: fileName,
            Expires: 60,
            ContentType: fileType,
            ACL: 'public-read'
        };
        s3.getSignedUrl('putObject', s3_params, function (err, data) {
            if (err) {
                reject(Error(err));
            }
            else {
                var return_data = {
                    signed_request: data,
                    url: 'https://' + bucket + '.s3.amazonaws.com/' + fileName
                };
                resolve(return_data);
            }
        });
    });
};


