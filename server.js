const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

//rest object
const app = express();
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

//port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} http://localhost:${PORT}🚀`
      .bgGreen.white
  );
});
