import express from "express";
import {
  getUser,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.put("/update/:email", updateUser);
userRouter.post("/delete", deleteUser);

export default userRouter;
