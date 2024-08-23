import ForumCard from "../Components/ForumCard/FourmCard"

const Forum = () => {

    return (
      <>
        <div className="Forum-Container">
          <div className="Forum-Container-main">
            <div className="Forum-types-container">
              <div className="Forum-type">Inter-Department</div>
              <div className="Forum-type">Intra-Department</div>
              <div className="Forum-type">Public</div>
            </div>
            <div className="Forum-list">
              <ForumCard />
              <ForumCard />
              <ForumCard />
              <ForumCard />
            </div>
          </div>
        </div>
      </>
    );
}

export default Forum