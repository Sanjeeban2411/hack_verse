const express = require('express')
// const mongoose = require('mongoose')
require('./mongo/db')
const cors = require('cors')
const userRouter = require("./routes/userRouter")
const transactionRouter = require("./routes/transactionRouter")
const loansRouter = require("./routes/loanRouter")

const app = express()
app.use(express.json()) 
app.use(cors())

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
app.use(express.static('../client'))

app.use(userRouter)
app.use(transactionRouter)
app.use(loansRouter)

app.listen(8000, () => {
    console.log('Server is running on port', 8000)
})