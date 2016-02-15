var pictures = require('../controllers/pictures.server.controller.js');
var albums = require('../controllers/albums.server.controller.js');

module.exports = function(app) {
    app.route('/albums/:albumId/pictures')
        .post(pictures.upload);
    app.param('albumId', albums.albumById);
};