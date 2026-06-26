import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

connectDb();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", postRoutes);
app.get("/sher", (req, res) => {
  const token = req.cookies;
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
