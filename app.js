const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const rootRouter = require('./src/routes')

const app = express()

app.use(morgan('tiny'))
app.use(helmet())
app.use(express.json())
app.use(cors())
app.use('/', rootRouter)

module.exports = app
