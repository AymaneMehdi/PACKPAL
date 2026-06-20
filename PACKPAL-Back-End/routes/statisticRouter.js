const express = require("express");
const router = express.Router();
const statistic = require("../controllers/statisticsController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, statistic.calculateTotal);

module.exports = router;