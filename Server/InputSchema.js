const mongoose = require('mongoose')
const InputSchema = new mongoose.Schema({
    ProjectName: String,
    AgencyName: String,
    StartDate: String,
    EndDate: String,
    Department: String,
    Budget: String,
    Latitude: String,
    Longitude: String,
    Description: String,
    ContactPerson: String,  // New field
    ContactEmail: String    // New field
});

module.exports = mongoose.model('PlanDetails', InputSchema);
