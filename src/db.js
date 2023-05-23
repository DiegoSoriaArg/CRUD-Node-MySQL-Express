import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: "aws.connect.psdb.cloud",
    user: "gnbamxbqxv3h82mfuapq",
    password: "pscale_pw_kKI4bYcA9rCZ9ZNgrenCUpCGXpuahc1Mj193oLUnf9m",
    database: "pruebaexpress",
    ssl: {
        rejectUnauthorized: false
    }
});