var pictures = require('../controllers/pictures.server.controller.js');
var albums = require('../controllers/albums.server.controller.js');
var multer = require('multer');
var upload = multer();

module.exports = function(app) {
    app.get('/upload', function(req, res) {
        res.render('upload.html');
    });
    app.route('/albums/:albumId/pictures')
        .post(upload.single('picture'), pictures.upload);
    app.param('albumId', albums.albumById);
};