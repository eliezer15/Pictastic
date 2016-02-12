var albums = require('../controllers/albums.server.controller.js');

module.exports = function(app) {
    app.route('/albums')
        .post(albums.create)
        .get(albums.list);
    app.route('/albums/:albumId')
        .get(albums.read)
        .put(albums.update)
        .delete(albums.delete);

    app.param('albumId', albums.albumById);
};