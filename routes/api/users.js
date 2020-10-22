const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const nodemailer = require('nodemailer');

// Load User Model
const User = require('../../models/User');

const validateLoginInput = require('../../validation/login');
const validateRegisterInput = require('../../validation/register');

// @route GET api/users/test
// @desc Tests users route
// @access Private
router.get('/test', (req, res) => res.json({ msg: 'User Works' }));

router.post('/sign-in', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.emailAddress;
  const password = req.body.password;

  // Find user by e-mail
  User.findOne({ email }).then((user) => {
    // Check for user
    if (!user) {
      errors.email = 'User not found.';
      return res.status(404).json(errors);
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User match

        const payload = {
          id: user.id,
          name: user.userName,
          avatar: user.avatar,
        }; // Create JWT payload

        // Sign the token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            });
          }
        );
      } else {
        errors.password = 'Password is incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.emailAddress }).then((user) => {
    if (user) {
      errors.email = 'Email Address already exist.';
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm', // Default
      });

      const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        avatar,
        password: req.body.password,
        role: 1,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              res.json(user);
              let transporter = nodemailer.createTransport({
                service: 'Gmail',
                secure: false,
                // port: 25,
                auth: {
                  user: 'petlinks.noreply@gmail.com',
                  pass: 'Arjay@2390',
                },
                tls: {
                  rejectUnauthorized: false,
                },
              });

              // send mail with defined transport object
              transporter.sendMail({
                from: '"Pet Link" <petlinks.noreply@gmail.com>', // sender address
                to: req.body.email,
                subject: 'Welcome to Pet Link!',
                text: `Welcome, ${req.body.name}!`,
                html:
                  'This is your e-mail confirmation that you have been registered to Pet Link!',
              });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
