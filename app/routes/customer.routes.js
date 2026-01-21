const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const { getCustomers, createCustomer } = require("../controllers/customer.controller");
router.get("/", auth, getCustomers);
router.post("/", auth, createCustomer);
module.exports = router;
