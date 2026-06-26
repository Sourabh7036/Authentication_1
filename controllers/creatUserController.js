import User from "../models/user.model.js";
import jwt from "jsonwebtoken";


const creatUserController = async (req, res) => {
  const { username, email, password } = req.body;
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorised",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userf = await User.findById({
      _id: decoded.id,
    });

    res.status(200).json({
      message: "User is valid",
      userf,
    });
  } catch (err) {
    res.status(401).json({
      message: "Unauthroised",
    });
  }

  //   const token = req.cookies;
  //   if(!token){
  //     return
  // res.status(40)
  //   }
};

export default creatUserController;
