const express = require('express');


const router = express.Router();




router.post('api/signup', async (req, res) => {


    const { username, email, password } = req.body;
  
    try {
      const user = new User({ username, email, password });
      await user.save();
      res.status(201).send('User created successfully');
    } catch (error) {
      console.error(error);
      if (error.code === 11000) {
        res.status(400).send('Username or email already exists');
      } else {
        res.status(500).send('Error creating user');
      }
    }
  });