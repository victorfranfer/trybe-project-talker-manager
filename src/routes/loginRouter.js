const { Router } = require('express');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const token = require('../utils/token'); 

const login = Router();

login.post('/', validateEmail, validatePassword, token);

module.exports = login;