import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: "aws.connect.psdb.cloud",
    user: "uo27j2xsztu3ahxx54lp",
    password: "pscale_pw_1738qLKDX6T7zNPBhNiWSXDyGUEpadptDS2WPmxOJXm",
    database: "pruebaexpress",
    ssl: {
        rejectUnauthorized: false
    }
});