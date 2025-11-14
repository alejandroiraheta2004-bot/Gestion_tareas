import express from "express";
import {
    getComments,
    getComment,
    addComment,
    editComment,
    removeComment
} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/", getComments);
router.get("/:id", getComment);
router.post("/", addComment);
router.put("/:id", editComment);
router.delete("/:id", removeComment);

export default router;