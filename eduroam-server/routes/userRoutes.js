// src/routes/userRoutes.js
import express from 'express';
import {
  registerUser,

 
  getColleges,
 
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);

router.get('/getColleges', getColleges);




export default router;
