var Album = require('mongoose').model('User');

exports.create = function(req, res, next) {
    var album = new Album(req.body);

    album.save(function (err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(album);
        }
    });
};