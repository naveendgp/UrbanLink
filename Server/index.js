const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const InputRouter = require("./Router/InputRouter")
const GetInput = require('./Router/GetInput')
require('dotenv').config()

const  app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://naveendgp:naveen$2004@cluster0.cphbl.mongodb.net/")
.then(() => console.log("Connected to database..."))
.catch((err) => console.log(err))

app.use("/",InputRouter)
app.use("/home",GetInput)
app.listen(8080,console.log("Listening..."))
    
