import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import goalRoutes from "./routes/goalRoutes.js";
import { userRouter } from "./routes/usersAuth.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://binderiyats:MERN1234.@ecommerce.sfwxhoe.mongodb.net/ecommerce"
);

app.use("/api/goals", goalRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
