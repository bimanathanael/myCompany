const express = require('express')
const routes = require('./routes')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use('/', routes)

app.listen(PORT, ()=> {
  console.log('listening to port', PORT)
})