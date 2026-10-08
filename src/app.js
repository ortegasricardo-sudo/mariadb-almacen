import express from "express";
import morgan from "morgan";

import pool from "./database.js";

const app = express();

app.use("/favicon.ico", (req, res) => res.status(200).end());
app.use(morgan("dev"));

app.get("/clientes", async (req, res) => {
    try {
        const result = await pool.query("select * from clientes");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/pedidos", async (req, res) => {
    try {
        const result = await pool.query("select * from pedidos");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/relacion", async (req, res) => {
    try {
        const result = await pool.query(
            "select nombre, producto from clientes join pedidos on clientes.id = pedidos.cliente_id",
        );
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/", (req, res) => {
    res.json("Bienvenido a mi almacen - welcome to my warehouse");
});

export default app;
