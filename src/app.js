import "dotenv/config";
import express from "express";

import sequelize from "./config/database.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();

sequelize.sync();

app.use(express.json());

// /* Midlertidig database test */
// try {
//     sequelize.sync();
//     await sequelize.authenticate();
//     console.log("Database connected!!!");
// } catch (err) {
//     console.log("failed to connect to database:", err);
// }

/* Routes */
app.use("/users", usersRouter);

export default app;
