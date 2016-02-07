/**
 * Created by eliezerencarnacion on 1/27/16.
 */
var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
    require('../app/models/album.server.model');
    return mongoose.connect(config.db);
}