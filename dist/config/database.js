"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DB_HOST', 'localhost'),
            database: env('DB_NAME', 'mydb'),
            user: env('DB_USER', 'postgres'),
            password: env('DB_PASSWORD', 'password'),
        },
        pool: { min: 0, max: 10 },
        debug: false,
    },
});
