import express from "express";
import controller from "@controllers/review.controller";

const router = express.Router();

router.get("/", controller.get);

export default router;
