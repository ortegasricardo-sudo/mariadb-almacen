import express from "express";
import morgan from "morgan";

import pool from "./database.js";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));

app.get("/clientes", async (req, res) => {
    const result = await pool.query("select * from clientes");
    console.log(result);
    res.json(result);
});

app.get("/pedidos", async (req, res) => {
    const result = await pool.query("select * from pedidos");
    console.log(result);
    res.json(result);
});

app.get("/relacion", async (req, res) => {
    const result = await pool.query(
        "select nombre, producto from clientes join pedidos on clientes.id = pedidos.cliente_id",
    );
    console.log(result);
    res.json(result);
});

app.get("/", (req, res) => {
    res.send("Hello Wolrd");
});

app.listen(app.get("port"), () => {
    console.log("Server is running on port", app.get("port"));
});
