'use strict';

var express = require('express');
var SlotController = require('../controllers/slot');

var api = express.Router();

// var md_auth = require('../middlewares/authenticated');

// var multipart = require('connect-multiparty');

// var md_upload = multipart({ uploadDir: './upload/users' });

// api.post('/register', UserController.registerUser);
// api.post('/login', UserController.loginUser);
// api.get('/user/:id', md_auth.ensureAuth, UserController.getUser);
// api.get('/checkUser/:uscuenta', UserController.checkUser);
// api.get('/users/:page?', md_auth.ensureAuth, UserController.getUsers);
// api.put('/updateUser/:id?', md_auth.ensureAuth, UserController.updateUser);
// api.post('/upload-image-user/:id?', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
// api.get('/get-image-user/:imageFile', md_auth.ensureAuth, UserController.getImageFile);

api.get('/SlotExceptions', SlotController.getSlotExceptions);

module.exports = api;
