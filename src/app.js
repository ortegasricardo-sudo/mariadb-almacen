import express from "express";
import morgan from "morgan";

import almacenRoutes from "./routes/almacen.route.js";

const app = express();

app.use("/favicon.ico", (req, res) => res.status(200).end());
app.use(morgan("dev"));

app.use("/", almacenRoutes);

app.get("/", (req, res) => {
  res.json("Bienvenido a mi almacen - Welcome to my warehouse");
});

export default app;
