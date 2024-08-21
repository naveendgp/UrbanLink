const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const InputRouter = require("./Router/InputRouter")
const GetInput = require('./Router/GetInput')
require('dotenv').config()

const  app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to database..."))
.catch((err) => console.log(err))

app.use("/",InputRouter)
app.use("/home",GetInput)
app.listen(8080,console.log("Listening..."))
    
