const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const connectMongoDBatlas = require('./config/dbConfig')
PORT = process.env.PORT || 3000

app.use(express.json())
connectMongoDBatlas()
app.get('/', (req,res ) => {
    res.status(200).json({
        message: 'API is running'
    })
} )

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})