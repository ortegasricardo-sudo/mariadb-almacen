import express from "express";
import morgan from "morgan";

const app = express();

app.use("/favicon.ico", (req, res) => res.status(200).end());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json("Bienvenido a mi almacen - welcome to my warehouse");
});

export default app;
