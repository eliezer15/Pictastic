var Album = require('mongoose').model('Album');

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

exports.list = function(req, res, next) {
    Album.find({}, function(err, albums) { //TODO: Return Albums user has access to
        if (err) {
            return next(err);
        }
        else {
            res.json(albums);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.album);
};

exports.albumById = function(req, res, next, id) {
    Album.findOne({
        _id: id
    }, function(err, album) {
        if (err) {
            return next(err);
        }
        else {
            req.album = album;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    Album.findByIdAndUpdate(req.album.id, req.body, {new: true}, function(err, album) {
        if (err) {
            return next(err);
        }
        else {
            res.json(album);
        }
    });
    var x = 5;
};

exports.delete = function(req, res, next) {
    req.album.remove(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.album);
        }
    });
};

