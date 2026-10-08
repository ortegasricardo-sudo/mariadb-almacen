import { Router } from "express";
import pool from "./database.js";

const router = Router();

router.get("/clientes", async (req, res) => {
    try {
        const result = await pool.query("select * from clientes");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/pedidos", async (req, res) => {
    try {
        const result = await pool.query("select * from pedidos");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/relacion", async (req, res) => {
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

export default router;
