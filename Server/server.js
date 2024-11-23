require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./Database/dbConnection");
const userRoutes = require("./Routes/userRoutes");

connectDB(process.env.DB_URL);
app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log("listening to port ", port);
});
