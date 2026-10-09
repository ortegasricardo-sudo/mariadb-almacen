import pool from "../database.js";

export const getClientes = async (req, res) => {
    try {
        const result = await pool.query("select * from clientes");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPeddos = async (req, res) => {
    try {
        const result = await pool.query("select * from pedidos");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getRelacion = async (req, res) => {
    try {
        const result = await pool.query(
            "select nombre, producto from clientes join pedidos on clientes.id = pedidos.cliente_id",
        );
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
