const express = require("express")
require('dotenv').config()

const { connect_db } = require('./config/database')
const errorHandler = require("./middleware/error")


const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

connect_db((res) => {
    console.log(res);
})


app.use('/api', require('./router/user'))

app.listen(PORT, () => {
    console.log(`Server is alive at ${PORT}`);
})

app.use(errorHandler)