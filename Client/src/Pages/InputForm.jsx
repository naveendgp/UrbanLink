import React, { useState } from "react";
import "./inputform.css";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    startDate: "",
    endDate:"",
    duration: "",
    location: "",
    agencyName:'',
    department:"",
    Description:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Project Details</h2>

        <div className="form-group1 group-right">
          <div className="form-group">
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group group-left">
            <label htmlFor="duration">Agency Name</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.agencyName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group1">
          <div className="form-group group-right">
            <label htmlFor="duration">Department</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group group-left">
            <label htmlFor="duration">Budget</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group1">
          <div className="form-group group-right date-container">
            <label htmlFor="date">Start Date</label>
            <input
              type="date"
              id="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group group-left date-container date-left">
            <label htmlFor="date">End Date</label>
            <input
              type="date"
              id="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group1">
          <div className="form-group group-right">
            <label htmlFor="duration">Latitude</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group group-left">
            <label htmlFor="duration">Longitude</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>
        </div>

       
        <div className="form-group">
          <label htmlFor="location" style={{marginLeft:"15vh"}}>Description</label>
          <input
            type="text"
            id="location"
            className="Description"
            name="location"
            value={formData.Description}
            style={{width:"35vw",marginLeft:"15vh",height:"10vh"}}
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

export default ProjectForm;
