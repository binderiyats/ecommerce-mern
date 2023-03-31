import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    address: {
      type: Object,
      default: [],
    },
    orders: {
      type: Array,
      default: [],
    },
    role: {
      type: String,
      enum: ["Admin", "Moderator", "Customer"],
      default: "Customer",
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", UserSchema);
