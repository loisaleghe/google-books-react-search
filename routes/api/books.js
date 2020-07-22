const express = require("express");

const router = express.Router();

const bookController = require("../../controllers/bookController");

router.get("/", bookController.findAll);
router.post("/", bookController.create);

router.get("/:id", bookController.findById);
router.delete("/:id", bookController.remove);

module.exports = router;
