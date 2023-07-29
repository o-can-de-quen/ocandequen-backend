import express from "express";
import programmingLanguagesController from "@controllers/programmingLanguages.controller";

const router = express.Router();

router.get("/", programmingLanguagesController.get);
router.post("/", programmingLanguagesController.create);
router.put("/:id", programmingLanguagesController.update);
router.delete("/:id", programmingLanguagesController.remove);

export default router;
