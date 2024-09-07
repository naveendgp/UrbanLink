import React from "react";
import Map from "../Components/Map/Map";
import Graph from "../Components/Graph/Graph";
import Calendars from "../Components/Calendar/Calendar";
import PlansCard from "../Components/PlansCard/PlansCard";
import ProjectCount from "../Components/ProjectCount/ProjectCount";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/home/projects");
        console.log(response.data); // This will log the data fetched from the backend
        setProjects(response.data); // Store the fetched data in state
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    getData();
  }, []);

  const navigate = useNavigate();

  
  const handleDetail = (details) => {
    navigate("/details", { state: { data: details } });
  };
  return (
    <div className="Home">
      <h1 className="homeHead">Home</h1>

      <div className="utils-grid">
        <div className="Map-grid">
          <Map />
        </div>

        <div className="graph-grid">
          <Graph />
        </div>

        {/* Calendar */}

        {/* <div className="calendar-grid">
          <Calendars />
        </div> */}
      </div>

      <div className="project-title">
        <h3 className="ongoing-plans">Ongoing Plans</h3>
        <h3 className="project-count">Projects Count</h3>
      
      </div>
      <div className="plans-group">
        <div className="Plans-grid">
          {projects.map((item) => (
            <PlansCard
              constructionname={item.Department}
              status={"Ongoing"}
              onClick={() => handleDetail(item)}
            />
          ))}
          {/* <PlansCard constructionname={"Pipe Construction"} status={"Ongoing"} onClick={handleDetail}/>
          <PlansCard constructionname={"Road Construction"} status={"Ongoing"}/>
          <PlansCard constructionname={"Road Construction"} status={"Completed"}/> */}
        </div>

        <div className="project-grid">
          <ProjectCount />
        </div>
      </div>
    </div>
  );
};

export default Home;
