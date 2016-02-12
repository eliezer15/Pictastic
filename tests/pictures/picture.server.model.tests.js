var mongoose = require('mongoose');
var Picture = mongoose.model('Picture');
var Album = mongoose.model('Album');
var should = require('should');

var album, picture, testParams;
describe('Picture model tests', function() {

    beforeEach(function(done) {
        album = new Album({name: "test-album"});
        album.save();

        testParams = {
            title: 'pic01.jpg',
            sizeInKb: 10,
            url: "https://amazons3.com",
            album: album
        };
        picture = new Picture(testParams);
        done();
    });

    it('Should save a regular model w/ timestamps', function() {
        picture.save(function(err,data) {
            should.not.exist(err);
            should.exist(data);
            picture.title.should.equal(testParams.title);
            picture.sizeInKb.should.equal(testParams.sizeInKb);
            picture.url.should.equal(testParams.url);
            picture.album.name.should.equal(album.name);
            picture.should.have.property('createdAt');
            picture.should.have.property('updatedAt');
        });
    });

    it('Should not save if any field is not provided', function() {
        picture.url = '';
        picture.save(function(err,data) {
            should.not.exist(data);
            should.exist(err);
        });
    });

    afterEach(function(done) {
        Picture.remove(function () {
            Album.remove(function () {
                done();
            });
        });
    });
});