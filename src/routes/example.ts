import express from "express";
import controller from "@controllers/example.controller";

const router = express.Router();

router.get("/", controller.get);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;
