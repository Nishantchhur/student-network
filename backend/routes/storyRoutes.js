const express = require("express");
const { createStory, getActiveStories } = require("../controllers/storyController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", protect, createStory);
router.get("/", protect, getActiveStories);

module.exports = router;
