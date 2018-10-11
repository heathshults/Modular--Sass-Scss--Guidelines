const express = require('express')
const open = require('open')
const app = express()
const port = 4000
const host = 'localhost'

app.get('/', (req, res) => res.send(''))

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}!`)
  open('localhost:4000')
})