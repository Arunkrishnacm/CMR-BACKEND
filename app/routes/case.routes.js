
const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const { createCase, updateCase } = require("../controllers/case.controller");
router.post("/", auth, createCase);
router.patch("/:id", auth, updateCase);
module.exports = router;
