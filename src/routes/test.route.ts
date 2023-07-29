import express from "express";
import testController from "@controllers/test.controller";

const router = express.Router();

router.get("/", testController.get);

export default router;
