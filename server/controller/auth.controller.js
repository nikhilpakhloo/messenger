import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signUp = async (req, res) => {
  try {
    // https://avatar.iran.liara.run/public
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json(newUser);
    } else {
      res.status(400).json({ error: "Invalid userData" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const LogIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(400).json({ error: "Invalid username and password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username and password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const LogOut = (req, res) => {
try {
    res.cookie("jwt", "", {maxAge:0})
    res.status(200).json({message:"Logout Successfully"})
} catch (error) {
  res.status(500).json({ error: error.message });
  
}
};
