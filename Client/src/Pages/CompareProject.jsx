import React from 'react'
import PlanMap from '../Components/Map/PlanMap';
import { useEffect,useState } from 'react';
const CompareProject = () => {


    const [data,setData] = useState("")

    const [projects, setProjects] = useState([]);

    const LatNum = 11.1671878;
    const LonNum = 77.3472673;

     
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8080/home/projects"
          );
          console.log(response.data); // This will log the data fetched from the backend
          setProjects(response.data);
          setData(response.data) // Store the fetched data in state
        } catch (err) {
          console.error("Error fetching projects:", err);
        }
      };

      getData();
    }, []);

    
  return (
    <div className="Compare-Project">
      <div className="Detailed-ReportContainer">
        <h3 className="projectDetails">Project Details</h3>
        <div className="Report-Container">
          <div className="Agency-Container">
            <div className="profile-container ">
              <img className="agency-logo" alt="" />
              <div
                className="agencyInfo"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "3vh",
                  marginTop: "10px",
                }}
              >
                <h3 className="agencyName">Agency Name</h3>
                <h3
                  className="agencyName"
                  style={{ marginTop: "10px", color: "#BFBFBF" }}
                >
                  {"Zeone"}
                </h3>
              </div>
            </div>
          </div>
          <div className="ConstructionInfo-Container">
            <div className="construction-group1">
              <div style={{ flex: "1" }}>
                <h3>Project Name</h3>
                <p>{"High way Road"}</p>
              </div>

              <div>
                <h3>Project Name</h3>
                <p>Road Construction Project</p>
              </div>
            </div>

            <div className="construction-group1">
              <div style={{ flex: "1" }}>
                <h3>Department Name</h3>
                <p>{"Road Construction"}</p>
              </div>

              <div style={{ marginRight: "9vh" }}>
                <h3>Project Budget</h3>
                <p>{"100000"}</p>
              </div>
            </div>

            <div className="construction-group1">
              <div style={{ flex: "1" }}>
                <h3>Start Date</h3>
                <p>{"13 February 2024"}</p>
              </div>

              <div style={{ marginRight: "11vh" }}>
                <h3>End Date</h3>
                <p>14 March 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Report-MapContainer">
          <div className="Report-Map">
            <div style={{ marginTop: "1vh" }}>
              <PlanMap
                latitude={11.27761}
                Longitude={77.58347}
                start={[LatNum, LonNum]}
                end={[11.239526, 77.502297]}
              />
            </div>
          </div>
          <div className="Report-MapCordinates">
            <p style={{ marginTop: "10px" }}>Map Details</p>

            <div className="Locations">
              <p>Starts From:Vijayamangalam</p>
              <p>Ends In: Tirupur</p>
              <p>Distance Covered: </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Detailed-ReportContainer">
        <h3 className="projectDetails">Project Details</h3>
        <div className="Report-Container">
          <div className="Agency-Container">
            <div className="profile-container ">
              <img className="agency-logo" alt="" />
              <div
                className="agencyInfo"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "3vh",
                  marginTop: "10px",
                }}
              >
                <h3 className="agencyName">Agency Name</h3>
                <h3
                  className="agencyName"
                  style={{ marginTop: "10px", color: "#BFBFBF" }}
                >
                  {"Aqua"}
                </h3>
              </div>
            </div>
          </div>
          <div className="ConstructionInfo-Container">
            <div className="construction-group1">
              <div style={{ flex: "1" }}>
                <h3>Project Name</h3>
                <p>{"Steel Pipe"}</p>
              </div>

              <div>
                <h3>Project Type</h3>
                <p>Pipe Construction Project</p>
              </div>
            </div>

            <div className="construction-group1">
              <div style={{ flex: "1" }}>
                <h3>Department Name</h3>
                <p>{"Pipe Construction"}</p>
              </div>

              <div style={{ marginRight: "9vh" }}>
                <h3>Project Budget</h3>
                <p>{"Budget"}</p>
              </div>
            </div>

            <div className="construction-group1">
              <div style={{ flex: "1" }}>
                <h3>Start Date</h3>
                <p>{"formattedStartDate"}</p>
              </div>

              <div style={{ marginRight: "11vh" }}>
                <h3>End Date</h3>
                <p>14 March 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Report-MapContainer">
          <div className="Report-Map">
            <div style={{ marginTop: "1vh" }}>
              <PlanMap
                latitude={11.27761}
                Longitude={77.58347}
                start={[LatNum, LonNum]}
                end={[11.239526, 77.502297]}
              />
            </div>
          </div>
          <div className="Report-MapCordinates">
            <p style={{ marginTop: "10px" }}>Map Details</p>

            <div className="Locations">
              <p>Starts From: Vijayamangalam</p>
              <p>Ends In: Tirupur</p>
              <p>Distance Covered: </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareProject;