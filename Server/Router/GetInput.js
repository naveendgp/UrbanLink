const express = require('express');
const router = express.Router();
const PlanDetails = require('../InputSchema');

router.get('/projects', async (req, res) => {
    try {
        const projects = await PlanDetails.find(); // Fetch all documents from the collection
        res.status(200).json(projects); // Respond with the data in JSON format
    } catch (err) {
        console.error("Error fetching projects:", err);
        res.status(500).json({ error: "Failed to fetch project details." });
    }
});

module.exports = router;
