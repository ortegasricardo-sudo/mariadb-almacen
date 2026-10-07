import { createPool } from "mariadb";

import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_PORT,
} from "../config.js";

const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
    supportBigNumbers: true,
    bigNumberStrings: true,
    insertIdAsNumber: true,
});

export default pool;
