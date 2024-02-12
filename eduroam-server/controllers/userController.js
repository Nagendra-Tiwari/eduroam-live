import dbConnection from '../database/dbConnection.js';
const db = dbConnection();

export const registerUser = (req, res) => {
  console.log(req.body)
  const { name, email, collegeCode, userType, userId, department, phone_number, date_of_birth } = req.body;
  
  // Generate the password based on the provided inputs
  const password = generatePassword(name, date_of_birth, phone_number);
  
  const checkUserQuery = `SELECT * FROM users WHERE email = ?`;
  const insertUserQuery = `INSERT INTO users (name, email, password, college_code, user_type, user_id, department, phone_number, date_of_birth) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  db.query(checkUserQuery, [email], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Internal Server Error" });
    } else {
      if (results.length > 0) {
        res.send({ message: "User already registered" });
      } else {
        db.query(
          insertUserQuery,
          [name, email, password, collegeCode, userType, userId, department, phone_number, date_of_birth],
          (err) => {
            if (err) {
              console.log(err);
              res.status(500).send({ message: "Internal Server Error" });
            } else {
              res.send({ message: "Successfully Registered, Please login now." });
            }
          }
        );
      }
    }
  });
};

// Function to generate the password based on user inputs
function generatePassword(name, date_of_birth, phone_number) {
  
  const firstName = name.substring(0, 3);
  const day = date_of_birth.split("-")[2];
  const month = date_of_birth.split("-")[1];
  const lastThreeDigits = phone_number.substring(phone_number.length - 3);
  return `${firstName}${day}${month}${lastThreeDigits}`;
}
  
  // Helper function to get the college table name


export const getColleges = (req,res)=>{

    const query = "SELECT code, name FROM eduromcollege";

    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching colleges:", err);
        res.status(500).send({ message: "Internal Server Error" });
      } else {
        res.send(results);
      }
    });
};



  
  

