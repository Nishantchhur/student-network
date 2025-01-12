const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  media: {
    type: String,  // URL for media (image/video)
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Story', storySchema);
