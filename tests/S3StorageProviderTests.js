var s3Storage = require('../lib/StorageProvider/S3StorageProvider');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;


var testFile = { fileName: "TestFile.txt" };
describe('S3StorageProvider Unit Tests:', function() {

    it('Returns a properly formatted S3 upload url', function() {
        var uploadUrl = s3Storage.putObject(testFile).then(function(response){
            return response.uploadUrl;
        });
        return expect(uploadUrl).to.eventually.match(/https:\/\/\S*.s3.amazonaws.com\/\S*?AWSAccessKeyId=\S*&Content-Type=\S*&Expires=\S*&Signature=\S*/);
    });
});

