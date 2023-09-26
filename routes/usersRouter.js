import express from "express";
import {
  addNewUser,
  getAllUsers,
  getUsersById,
  updateUser,
  deleteUser,
} from "../controllers/users.js";
import { userValidator } from "../validator/userValidator.js";

const usersRouter = express.Router();

usersRouter.route("/").get(getAllUsers).post(userValidator, addNewUser);
usersRouter.route("/:id").get(getUsersById).put(updateUser).delete(deleteUser);

export default usersRouter;
