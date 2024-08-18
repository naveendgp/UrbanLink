const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const  app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to database..."))
.catch((err) => console.log(err))

app.listen(8080,console.log("Listening..."))

