const Institute = require("../models/Institute");
const User = require("../models/User");

// Admin can link users to an institute
const linkUserToInstitute = async (req, res) => {
  const { userId, instituteId } = req.body;

  try {
    const user = await User.findById(userId);
    const institute = await Institute.findById(instituteId);

    if (!user || !institute) {
      return res.status(404).json({ message: "User or Institute not found" });
    }

    user.affiliation = institute._id;
    await user.save();

    if (user.role === "student") {
      institute.students.push(user._id);
    } else if (user.role === "teacher") {
      institute.teachers.push(user._id);
    }
    await institute.save();

    res.status(200).json({ message: "User successfully linked to the institute" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin can assign verification badge to a user
const assignVerificationBadge = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.verificationBadge = true; // Set to true to indicate verified
    await user.save();

    res.status(200).json({ message: "Verification badge assigned successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin can verify users
const verifyUser = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isVerified = true; // Mark the user as verified
    await user.save();

    res.status(200).json({ message: "User successfully verified" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { linkUserToInstitute, assignVerificationBadge, verifyUser };
