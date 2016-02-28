var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var config = require('../../config/config');
var uuid = require('node-uuid');
var fs = require('fs');

var bucket = config.s3_bucket;
var delimiter = '/';

exports.putObject = function(file) {
    return new Promise(function (resolve, reject) {
        var prefix = uuid.v1();
        var key = prefix + delimiter + file.originalname;

        var params = {
            Bucket: bucket,
            Key: key,
            ContentType: 'application/octet-stream',
            Body: file.buffer,
            ACL: 'public-read'
        };

        s3.upload(params, function(err, data) {
            if (err) {
                reject(Error(err));
            }
            else {
                resolve(data);
            }
        });

    });
};

exports.getObject = function(prefix, key) {
    return new Promise(function(resolve, reject) {
        var params = {
            Bucket: bucket,
            Key: prefix + delimiter + key
        };

        //Check if key exists first
        s3.headObject(params, function (err, data) {
            if (err && err.code == 'NotFound') {
                reject(Error(err));
            }
            else {
                getSignedUrl('getObject', data)
                    .then(function(result) {
                        resolve(result);
                    }, function(err) { reject(Error(err)); });
            }
        });
    });
};

exports.getObjectMetadata = function(key) {
    return new Promise(function(resolve, reject) {
        var params = {
            Bucket: bucket,
            Key: key
        };

        s3.headObject(params, function(err, data) {
            if (err) {
                reject(Error(err));
            }
            else {
                resolve(data);
            }
        });
    });
};

/*
function getSignedUrl(operation, params) {

    return new Promise(function(resolve, reject) {
        s3.getSignedUrl(operation, params, function (err, data) {
            if (err) {
                reject(Error(err));
            }
            else {
                resolve(data);
            }
        });
    });
}
*/