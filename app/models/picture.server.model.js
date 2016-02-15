var mongoose = require('mongoose');

var PictureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    sizeInKb: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    album: {
        type: mongoose.Schema.ObjectId,
        ref: 'Album',
        required: true
    }
}, {timestamps: true});

mongoose.model('Picture', PictureSchema);