var s3Storage = require('../lib/StorageProvider/S3StorageProvider');
var should = require('should');

describe('S3StorageProvider Unit Tests:', function() {

    describe('Test the putObject', function () {
        it('Should return an S3 upload url', function() {
            var file = { Name: "TestFile", Type: ".txt"};
            s3Storage.putObject(file)
                .then(function(response) {
                    should.exist(response);
                })
                .then(function(error) {
                    should.not.exist(error);
                });
        });
    });

});
