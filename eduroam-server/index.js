import express from 'express';
import cors from 'cors';
import dbConnection from './database/dbConnection.js';

import userRoutes from './routes/userRoutes.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const db = dbConnection();

const userSchema = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    college_code VARCHAR(255) NOT NULL,
    user_type ENUM('student', 'faculty') NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    status INT(255)
  )`;

db.query(userSchema, (err) => {
  if (err) {
    console.error('Error creating user table:', err);
  } else {
    console.log('User table created or already exists');
  }
});


app.use('/user', userRoutes);

app.listen(5002, () => {
  console.log('BE started at port 5002');
});
