import dotenv from 'dotenv';
import mysql from "mysql2/promise"


export const db_conn = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.USER_NAME || "mobile-hour-app",
    password : process.env.PASSWORD || "Sanjay2001!",
    database: process.env.DATABASE || "mobile-hour-2023"
})