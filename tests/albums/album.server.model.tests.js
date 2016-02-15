var Album = require('mongoose').model('Album');
var expect = require('chai').expect;

var testParams = { name: 'Test-Album'};

describe('Album model tests', function() {
    it('Should save a regular model w/ timestamps', function(done) {
        var theAlbum = new Album(testParams);
        theAlbum.save(function(err,data) {
            expect(err).to.not.exist;
            expect(data).to.exist;
            expect(theAlbum.name).to.equal(testParams.name);
            expect(theAlbum).to.have.property('createdAt');
            expect(theAlbum).to.have.property('updatedAt');

            done();
        });
    });

    it('Should not save if no name is provided', function(done) {
        var params =  {};
        var theAlbum = new Album(params);
        theAlbum.save(function(err,data) {
            expect(data).to.not.exist;
            expect(err).to.exist;

            done();
        });

    });

    afterEach(function(done) {
        Album.remove(function() {
            done();
        });
    })
});