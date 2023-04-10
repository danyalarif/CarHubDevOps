const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const userRouter = require('./routes/user')
const dbURL = 'mongodb://localhost:27017/carhub'

app.use(cors())
app.use(express.json())
app.use('/', userRouter)
mongoose.connect(dbURL, (err) => {
    if (err) return
})
app.listen(3000, () => {
    console.log('server listening on port 3000')
})