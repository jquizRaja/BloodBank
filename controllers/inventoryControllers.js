const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

//Create Inventory :add same
const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body
    //validation
    const user = await userModel.findOne({ email })
    if (!user) {
      throw new Error("User Not Found")
    }
    if (inventoryType === "in" && user.role !== "donar") {
      throw new Error("Not A Donor Account")
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a Hospital")
    }
    //save inventory or record
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New Blood Record Added",
    });
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success: false,
      message: "Error in Create Inventory API",
      error,
    });
  }
};

module.exports = { createInventoryController };
