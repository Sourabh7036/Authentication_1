import express from "express";
import creatUserController from "../controllers/creatUserController.js";

const router = express.Router();
router.post("/create", creatUserController);

export default router;
