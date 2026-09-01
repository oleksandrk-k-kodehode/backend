import express from "express";

import usersRouter from "./routes/usersRouter.js";


const app = express();

app.use(express.json());

/* Routes */
app.use('/users', usersRouter);

const port = 8000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})