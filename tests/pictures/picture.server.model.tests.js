var mongoose = require('mongoose');
var Picture = mongoose.model('Picture');
var Album = mongoose.model('Album');
var expect = require('chai').expect;

var album, picture, testParams;
describe('Picture model tests', function() {

    beforeEach(function(done) {
        album = new Album({name: "test-album"});
        album.save();

        testParams = {
            title: 'pic01.jpg',
            sizeInKb: "10",
            url: "https://amazons3.com",
            album: album
        };
        picture = new Picture(testParams);
        done();
    });

    it('Should save a regular model w/ timestamps', function(done) {
        picture.save(function(err,data) {
            expect(err).to.not.exist;
            expect(data).to.exist;

            expect(picture.title).to.equal(testParams.title);
            expect(picture.sizeInKb).to.equal(testParams.sizeInKb);
            expect(picture.url).to.equal(testParams.url);
            expect(picture.album).to.equal(album);
            expect(picture).to.have.property('createdAt');
            expect(picture).to.have.property('updatedAt');

            done();
        });

    });

    it('Should not save if any field is not provided', function(done) {
        picture.url = '';
        picture.save(function(err,data) {
            expect(data).to.not.exist;
            expect(err).to.exist;

            done();
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