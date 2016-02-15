/**
 * Created by eliezerencarnacion on 1/27/16.
 */
var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
    require('../app/models/album.server.model');
    require('../app/models/picture.server.model');
    require('../app/models/tempPicture.server.model');
    return mongoose.connect(config.db);
};