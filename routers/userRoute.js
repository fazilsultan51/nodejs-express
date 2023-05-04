import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";
import verifyToken from "../middelware/verifyUser.js";
const router = express.Router();

router.get("/", verifyToken, getUsers);
router.post("/", createUser);

export default router;
