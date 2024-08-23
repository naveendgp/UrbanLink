import PlanMap from "../Components/Map/PlanMap";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailedReport = () => {

  const navigate = useNavigate()

  const handleDetail = () => {
    navigate("/compareProject");
  };


  const Location = useLocation();
  const data = Location.state?.data;
  console.log("useLocation", data);

  const StartDate = data.StartDate;
  const date = new Date(StartDate);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const formattedStartDate = `${day} ${month} ${year}`;

  const EndDate = data.EndDate;
  const date1 = new Date(EndDate);

  const day1 = date1.getDate();
  const month1 = date1.toLocaleString("default", { month: "long" });
  const year1 = date1.getFullYear();

  const [address, setAddress] = useState("");

  const place = address.split(" ");

  const LatNum = Number(data.Latitude);
  const LonNum = Number(data.Longitude);

  const FindDistance = (LatNum,LonNum,Lat2,Lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const lat1 = LatNum;
    const lon1 = LonNum;
    const lat2 = Lat2;
    const lon2 = Lon2;

    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(lat1)) *
        Math.cos(degreesToRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance;
  };

  function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  const distance = FindDistance(LatNum, LonNum, 11.239526, 77.502297);

  useEffect(() => {
    const reverseGeocode = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${LatNum}&lon=${LonNum}&zoom=18&addressdetails=1`
        );
        const data = await response.json();
        if (data && data.display_name) {
          setAddress(data.display_name);
          console.log(data.display_name);
        } else {
          setAddress("Address not found");
        }
      } catch (error) {
        console.error("Error during reverse geocoding:", error);
        setAddress("Error retrieving address");
      }
    };

    reverseGeocode();
  }, []);

  const formattedEndDate = `${day1} ${month1} ${year1}`;
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
                  {data.AgencyName}
                </h3>
              </div>
            </div>
          </div>
          <div className="ConstructionInfo-Container">
            <div className="construction-group1">
              <div style={{ flex: "1" }}>
                <h3>Project Name</h3>
                <p>{data.ProjectName}</p>
              </div>

              <div>
                <h3>Project Name</h3>
                <p>Road Construction Project</p>
              </div>
            </div>

            <div className="construction-group1">
              <div style={{ flex: "1" }}>
                <h3>Department Name</h3>
                <p>{data.Department}</p>
              </div>

              <div style={{ marginRight: "9vh" }}>
                <h3>Project Budget</h3>
                <p>{data.Budget}</p>
              </div>
            </div>

            <div className="construction-group1">
              <div style={{ flex: "1" }}>
                <h3>Start Date</h3>
                <p>{formattedStartDate}</p>
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
          <div className="Report-MapCordinates" style={{ height: "30vh" }}>
            <p style={{ marginTop: "10px" }}>Map Details</p>

            <div className="Locations">
              <p>Starts From: {place[0]}</p>
              <p>Ends In: Vijayamangalam</p>
              <p>Distance Covered: {distance.toFixed(2)}km</p>
            </div>
            <button
              className="compare-btn"
              onClick={() => navigate("/CompareProject")}
            >
              Compare Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedReport;
