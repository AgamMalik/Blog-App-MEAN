const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db')


const app = express()
const port = 3000

app.use(bodyParser.json())

app.use(cors({origin: 'http://localhost:4200'}))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))