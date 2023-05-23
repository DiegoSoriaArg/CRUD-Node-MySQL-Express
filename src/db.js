import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: "aws.connect.psdb.cloud",
    user: "8g5rjnqu3isx1qydcqxk",
    password: "pscale_pw_bNDwEgeTKqBU2SYWNRBkuMxSnfwh9ywMaAIzjnCZHd5",
    database: "pruebaexpress",
    ssl: {
        rejectUnauthorized: false
    }
});