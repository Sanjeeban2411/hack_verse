const express = require('express')
// const mongoose = require('mongoose')
require('./mongo/db')
const cors = require('cors')

const app = express()
app.use(express.json()) 
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(require("./routes/userRouter"))

app.listen(8000, () => {
    console.log('Server is running on port', 8000)
})