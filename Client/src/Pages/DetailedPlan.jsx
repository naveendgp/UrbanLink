import PlanMap from "../Components/Map/PlanMap";

const DetailedReport = () => {
  return (
    <>
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
                  Zeone
                </h3>
              </div>
            </div>
          </div>
          <div className="ConstructionInfo-Container">
            <div className="construction-group1">
              <div style={{ flex: "1" }}>
                <h3>Project Name</h3>
                <p>Road Construction Project</p>
              </div>

              <div>
                <h3>Project Name</h3>
                <p>Road Construction Project</p>
              </div>
            </div>

            <div className="construction-group1">
              <div style={{ flex: "1" }}>
                <h3>Department Name</h3>
                <p>Road Department</p>
              </div>

              <div>
                <h3>Project Budget</h3>
                <p>Road Construction Project</p>
              </div>
            </div>

            <div className="construction-group1">
              <div style={{ flex: "1" }}>
                <h3>Start Date</h3>
                <p>10 January 2024</p>
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
                start={[11.275303, 77.584246]}
                end={[11.239526, 77.502297]}
              />
            </div>
          </div>
          <div className="Report-MapCordinates">

            
            <p style={{ marginTop: "10px" }}>Map Details</p>

            <div className="Locations">
              <p>Starts From: Perundurai</p>
              <p>Ends In: Vijayamangalam</p>
              <p>Distance Covered: 10.3 km</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedReport;
