import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

connectDb();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
