var mongoose = require('mongoose');

var PictureSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    sizeInKb: {
        type: String
    },
    keyPrefix: {
        type: String
    },
    album: {
        type: mongoose.Schema.ObjectId,
        ref: 'Album'
    }
});

mongoose.model('Picture', PictureSchema);