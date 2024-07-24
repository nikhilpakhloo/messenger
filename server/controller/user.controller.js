import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggeInUserId = req.user._id;
    const filterUsers = await User.find({_id:{ $ne: loggeInUserId }}).select(
      "-password"
    );
    res.status(200).json(filterUsers);
  } catch (error) {
    console.log("Internal server error:", error.message);

    res.status(500).json({ error: error.message });
  }
};
