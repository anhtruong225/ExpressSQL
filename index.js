import express from "express";
import pool from "./db/server.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
