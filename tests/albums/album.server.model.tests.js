var Album = require('mongoose').model('Album');
var should = require('should');

var testParams = { name: 'Test-Album'};

describe('Album model tests', function() {
    it('Should save a regular model w/ timestamps', function() {
        var theAlbum = new Album(testParams);
        theAlbum.save(function(err,data) {
            should.not.exist(err);
            should.exist(data);
            theAlbum.name.should.equal(testParams.name);
            theAlbum.should.have.property('createdAt');
            theAlbum.should.have.property('updatedAt');
        });
    });

    it('Should not save if no name is provided', function() {
        var params =  {};
        var theAlbum = new Album(params);
        theAlbum.save(function(err,data) {
            should.not.exist(data);
            should.exist(err);
        });
    });

    afterEach(function(done) {
        Album.remove(function() {
            done();
        });
    })
});