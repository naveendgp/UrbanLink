const express = require('express')
const router = express.Router()
const FormModel = require("../InputSchema")

router.post("/input", async (req, res) => {
    try {

        const { ProjectName, AgencyName, StartDate, EndDate, Department, Budget, Latitude, Longitude, Description } = req.body

        const newInput = await FormModel.create({ ProjectName, AgencyName, StartDate, EndDate, Department, Budget, Latitude, Longitude, Description })

        console.log("hello",newInput)

        res.status(201).json(newInput)
    } catch (err) {
        res.status(500).json({ message: "Internal" })
    }

})

module.exports = router