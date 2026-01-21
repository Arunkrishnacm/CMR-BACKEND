require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", require("./app/routes/auth.routes"));
app.use("/api/customers", require("./app/routes/customer.routes"));
app.use("/api/cases", require("./app/routes/case.routes"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
