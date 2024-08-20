import React from 'react'
import  Map  from '../Components/Map/Map'
import Graph from '../Components/Graph/Graph';
import Calendars from '../Components/Calendar/Calendar';
import PlansCard from '../Components/PlansCard/PlansCard';
import ProjectCount from '../Components/ProjectCount/ProjectCount';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate()

  const handleDetail = () => {
    navigate("/details");
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

        <div className="calendar-grid">
          <Calendars/>
        </div>
      </div>

      <div className="project-title">
        <h3 className="ongoing-plans">Ongoing Plans</h3>
        <h3 className='project-count'>Projects Count</h3>
        <button className='project-btn' onClick={() => navigate("/inputform")}>New Plan</button>
      </div>
      <div className="plans-group">
        <div className="Plans-grid">
          <PlansCard constructionname={"Pipe Construction"} status={"Ongoing"} onClick={handleDetail}/>
          <PlansCard constructionname={"Road Construction"} status={"Ongoing"}/>
          <PlansCard constructionname={"Road Construction"} status={"Completed"}/>
        </div>

        <div className="project-grid">
          <ProjectCount />
        </div>
      </div>
    </div>
  );
}

export default Home