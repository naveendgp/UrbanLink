import './projectcount.css'

const ProjectCount = () => {

    return (
      <div className="ProjectCount-container">
        <div className="RoadCount">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            RoadCount
            <h3>2</h3>
          </div>
        </div>
        <div className="PipeCount">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Pipe Count
            <h3>1</h3>
          </div>
        </div>
        <div className="TotalCount">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Total Count
            <h3>3</h3>
          </div>
        </div>
      </div>
    );
}

export default ProjectCount