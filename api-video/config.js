require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    database: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME
    }
}

module.exports = { config };