var mongoose = require('mongoose');

var AlbumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    pictures: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Picture'
    }]
});

mongoose.model('Album', AlbumSchema);