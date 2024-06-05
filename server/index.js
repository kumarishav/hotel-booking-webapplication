const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config
const cors = require('cors')
const mongoBD = require('./config/db')

const authRoutes = require('./routes/auth.js')


mongoBD();
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

//routes
app.use('/auth', authRoutes)


