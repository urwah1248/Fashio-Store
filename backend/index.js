const express = require('express')
const mongoose = require('mongoose')
const router = require('./routers/router')
require('dotenv').config()
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5001

mongoose.connect(process.env.URI)
    .then(res => {
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.log(err);
    })

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => [
    console.log(`Server is running at https://localhost:${PORT}`)
])

