import { createPool } from "mariadb";

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "almacen",
    port: 3307,
    supportBigNumbers: true,
    bigNumberStrings: true,
    insertIdAsNumber: true,
});

export default pool;
