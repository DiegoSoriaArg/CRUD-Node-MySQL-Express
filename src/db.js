import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: "aws.connect.psdb.cloud",
    user: "cxirlcli6nlfneve74dk",
    password: "pscale_pw_LGUNyWCpYsWVzJY1JrNWuTTWbwP5l6TE7qkrwUzdHxq",
    database: "pruebaexpress",
    ssl: {
        rejectUnauthorized: false
    }
});