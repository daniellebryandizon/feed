const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    profileImage: {
        data: Buffer,
        contentType: String,
    },
    numRecipes: {
        type: Number,
    },
    numFollowers: {
        type: Number
    },
    numLikes: {
        type: Number
    },
    tags: {
        type: [String]
    },
}, { timestamps: true });

module.exports = Profile = mongoose.model('profile', ProfileSchema)