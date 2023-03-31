import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, password } = req.body;

  const user = await UserModel.findOne({ name });

  res.json(user);
});

export { router as userRouter };
