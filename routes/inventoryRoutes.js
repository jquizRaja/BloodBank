 const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { createInventoryController } = require("../controllers/inventoryControllers");

 const router = express.Router();
//ADD INVENTORY: CREATE POST
 router.post("/create-inventory",authMiddleware,createInventoryController);

 module.exports = router;
