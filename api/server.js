require("jsonwebtoken");
var cookieParser = require('cookie-parser')
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();
server.use(cookieParser());

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
 server.use('/api/jokes', authenticate, jokesRouter);
// server.use('/api/jokes', jokesRouter);

module.exports = server;
