const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const router = require('./Route/route')

app.listen(5000, function () {
  console.log('server demarer')
})
app.use('/', router)