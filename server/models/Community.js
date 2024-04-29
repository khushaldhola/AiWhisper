const { default: mongoose } = require("mongoose");

const communitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    members: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        joinedAt: {
            type: Date,
            default: Date.now
        }
    }],
    posts: [{
        postText: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        imageUrl: String,
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }],
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'
        }]
    }]
});

module.exports = mongoose.model('community', communitySchema);
