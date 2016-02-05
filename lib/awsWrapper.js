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


