const Notification = require('../models/Notification');

// Create a new notification
const createNotification = async (userId, content) => {
  const notification = new Notification({
    user: userId,
    content,
  });
  await notification.save();
};

// Get notifications for a user
const getNotifications = async (userId) => {
  try {
    const notifications = await Notification.find({ user: userId }).sort({ createdAt: -1 });
    return notifications;
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports = { createNotification, getNotifications };
