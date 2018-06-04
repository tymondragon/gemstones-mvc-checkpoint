const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = process.env.PORT || 3000
const listener = console.log(`Listening on port ${port}.`);

app.disable('x-powered-by')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// if (process.env.NODE_ENV ==="development")
app.use(morgan('dev'))

const gemstoneRoutes = require('./routes/gemstones.js')
app.use('/gems', gemstoneRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error:err.error})
})
app.use((req, res, next) => {
  res.status(404).json({error:{message:"Not Found"}})
})
app.listen(port, listener)

module.exports = app