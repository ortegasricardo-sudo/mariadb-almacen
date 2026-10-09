import { Router } from "express";

import {
    getClientes,
    getPeddos,
    getRelacion,
} from "../controllers/almacen.controller.js";

const router = Router();

router.get("/clientes", getClientes);

router.get("/pedidos", getPeddos);

router.get("/relacion", getRelacion);

export default router;
