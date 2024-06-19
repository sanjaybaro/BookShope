import express from "express";
import { signup } from "../Controller/user.contoller.js";
import { login } from "../Controller/user.contoller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;
