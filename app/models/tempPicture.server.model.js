/**
 * This model represents a file that has not been uploaded yet.
 * Once the file is uploaded, this record will be deleted and the
 * picture model will be saved in the database
 */

var mongoose = require('mongoose');

var TempPictureSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    uploadUrl: {
        type: String,
        required: true
    },
    album: {
        type: mongoose.Schema.ObjectId,
        ref: 'Album',
        required: true
    }
}, {timestamps: true});

mongoose.model('TempPicture', TempPictureSchema);

