import express from "express";
import { createUser } from "./services/create.user.js";
import { getUserByEmail } from "./services/get.user.by.email.js";

const router = express.Router();

router.post("/user", createUser);
router.get("/user/:email", getUserByEmail);

export default router;
