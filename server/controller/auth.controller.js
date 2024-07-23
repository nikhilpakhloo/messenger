import user from "../models/user.model.js";
import bycrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    // https://avatar.iran.liara.run/public
    const {
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
   
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }
    const existingUser = await user.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const salt = await bycrypt.genSalt(10)
    const hashedPassword = await bycrypt.hash(password, salt)


    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new user({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    await newUser.save()
    res.status(201).json({newUser})
  } catch (error) {
    res.status(500).json({error:error.message})
  }
};
export const LogIn = (req, res) => {
  res.send("Login logic here");
};
export const LogOut = (req, res) => {
  res.send("Logout logic here");
};
