var mongoose = require('mongoose');

var PictureSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    sizeInKb: {
        type: String,
        required: true
    },
    s3Key: {
        type: String,
        required: true
    },
    album: {
        type: mongoose.Schema.ObjectId,
        ref: 'Album'
    }
});

mongoose.model('Picture', PictureSchema);