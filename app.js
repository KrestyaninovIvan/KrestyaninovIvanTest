const express = require('express')
const cardRoutes = require('./routes/card')
const mongoose = require('mongoose')

const app = express()

app.use('/api/card' , cardRoutes )

module.exports = app

