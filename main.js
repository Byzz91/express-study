const express = require('express')
const app = express()
const user = require('./routes/user')
const morgan = require('morgan') // logging module
const bodyParser = require('body-parser')

// const myLogger = (req, res, next) => {
//   console.log(req.url)
//   next()
// }

/**
 * Middleware
 */
// app.use(myLogger)
app.use(morgan('dev'))
app.use(bodyParser.json()) // JSON 형태의 body를 가능하게 해준다
app.use('/', express.static('public'))
app.use('/user', user)

app.listen(3000, () => {
  console.log('Example App is listening on port 3000')
})