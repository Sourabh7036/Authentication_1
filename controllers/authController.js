import User from "../models/user.model.js";

const authController = async (req, res) => {
  const { username, email, password } = req.body;

  const result = await User.create({
    username,
    email,
    password,
  });

  res.status(201).json({
    message: "User register successfuly",
  });
};

export default authController;
