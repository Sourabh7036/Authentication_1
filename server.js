import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

connectDb();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.get("/user", (req, res) =>{
   const cookie = req.cookies;
   console.log(cookie);
   res.send(cookie);
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
