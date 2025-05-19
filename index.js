const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log('conect to DB'))
.catch((err)=>console.error(err.message))

const app = express()
const port = (process.env.PORT || 3005)
app.set('port', port)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const controllerAuthor = require('./controllers/author')
app.post('/api/author/create',controllerAuthor.create)

require(`dotenv`).config();