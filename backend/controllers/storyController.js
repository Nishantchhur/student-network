const Story = require('../models/Story');

// Create a new story
const createStory = async (req, res) => {
  const { media, expiresAt } = req.body;
  try {
    const story = new Story({
      user: req.user._id,
      media,
      expiresAt,
    });
    await story.save();
    res.status(201).json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get active stories (not expired)
const getActiveStories = async (req, res) => {
  try {
    const stories = await Story.find({
      expiresAt: { $gt: new Date() }
    }).populate('user', 'name email').sort({ createdAt: -1 });
    res.json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createStory, getActiveStories };
