import mysql from 'mysql2';

const dbConnection = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'anna_edu_users',
  });
 
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });

  return connection;
};

export default dbConnection;
