const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 7800



mongoose.connect('mongodb://0.0.0.0:27017').then(() => {
    console.log("connected to database");
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})