import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import loginRoute from "./routers/loginRoute.js";
import userRoutes from "./routers/userRoute.js";
import categoryRoute from "./routers/categoryRoute.js";
import connectDB from "./dbconnection/db.js";
const app = express();
connectDB();
app.use(express.json());

app.use("/user", userRoutes);

app.use("/login", loginRoute);
app.use("/category", categoryRoute);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listen at Port ${port}`);
});
