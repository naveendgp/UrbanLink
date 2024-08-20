import React, { useState } from "react";
import "./inputform.css";
import axios from "axios";

const InputForm = () => {
  const [formData, setFormData] = useState({
    ProjectName: "",
    StartDate: "",
    EndDate: "",
    Budget: "",
    Latitude: "",
    Longitude: "",
    ToLatitude: "",
    ToLongitude: "",
    AgencyName: "",
    Department: "",
    Description: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/input",
        formData
      );
      console.log("Data Saved", response.data);
      setSuccessMessage("Project details saved successfully!");
      setErrorMessage("");
    } catch (err) {
      console.log("Error saving data:", err);
      setErrorMessage("Failed to save project details.");
      setSuccessMessage("");
    }
    console.log("Form Data:", formData);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Project Details</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="form-group1 group-right">
          <div className="form-group">
            <label htmlFor="ProjectName">Project Name</label>
            <input
              type="text"
              id="ProjectName"
              name="ProjectName"
              value={formData.ProjectName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group group-left">
            <label htmlFor="AgencyName">Agency Name</label>
            <input
              type="text"
              id="AgencyName"
              name="AgencyName"
              value={formData.AgencyName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group1">
          <div className="form-group group-right">
            <label htmlFor="Department">Department</label>
            <input
              type="text"
              id="Department"
              name="Department"
              value={formData.Department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group group-left">
            <label htmlFor="Budget">Budget</label>
            <input
              type="text"
              id="Budget"
              name="Budget"
              value={formData.Budget}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group1">
          <div className="form-group group-right date-container">
            <label htmlFor="StartDate">Start Date</label>
            <input
              type="date"
              id="StartDate"
              name="StartDate"
              value={formData.StartDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group group-left date-container date-left">
            <label htmlFor="EndDate">End Date</label>
            <input
              type="date"
              id="EndDate"
              name="EndDate"
              value={formData.EndDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group1">
          <div className="form-group group-right">
            <label htmlFor="Latitude1">Latitude 1</label>
            <input
              type="text"
              id="FromLatitude"
              name="FromLatitude"
              value={formData.Latitude}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group group-left">
            <label htmlFor="Longitude1">Longitude 1</label>
            <input
              type="text"
              id="Longitude"
              name="Longitude"
              value={formData.Longitude}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group1">
          <div className="form-group group-right">
            <label htmlFor="Latitude2">Latitude 2</label>
            <input
              type="text"
              id="ToLatitude"
              name="ToLatitude"
              value={formData.ToLatitude}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group group-left">
            <label htmlFor="Longitude2">Longitude 2</label>
            <input
              type="text"
              id="ToLongitude"
              name="ToLongitude"
              value={formData.ToLongitude}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="Description" style={{ marginLeft: "15vh" }}>
            Description
          </label>
          <input
            type="text"
            id="Description"
            className="Description"
            name="Description"
            value={formData.Description}
            style={{ width: "35vw", marginLeft: "15vh", height: "10vh" }}
            onChange={handleChange}
            required
          />
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
