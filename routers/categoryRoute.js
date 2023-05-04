import express from "express";
import {
  Createcategory,
  deleteCategory,
  GetCategory,
  UpdateCategory,
} from "../controllers/categoriesController.js";
import verifyToken from "../middelware/verifyUser.js";
const router = express.Router();

router.get("/", verifyToken, GetCategory);
router.post("/", verifyToken, Createcategory);
router.put("/:id", verifyToken, UpdateCategory);
router.delete("/:id", verifyToken, deleteCategory);

export default router;
