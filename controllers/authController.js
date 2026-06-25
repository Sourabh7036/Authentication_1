import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const authController = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.create({
    username,
    email,
    password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  const cookie = res.cookie("token", token);
  console.log(cookie);

  res.status(201).json({
    message: "User register successfuly",
    user,
  });
};

export default authController;
