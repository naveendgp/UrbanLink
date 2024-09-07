import ForumCard from "../Components/ForumCard/FourmCard"
import { useNavigate } from "react-router-dom";

const Forum = () => {

    const navigate = useNavigate()

    return (
      <>
        <div className="Forum-Container">
          <div className="Forum-Container-main">
            <div className="Forum-types-container">
              <div
                className="Forum-type inter"
                onClick={() => navigate("/discussionForum")}
              >
                <p>Inter-Department</p>
              </div>
              <div
                className="Forum-type intra"
                onClick={() => navigate("/discussionForum")}
              >
                <p> Intra-Department</p>
              </div>
              <div
                className="Forum-type public"
                onClick={() => navigate("/discussionForum")}
              >
                <p>Public</p>
              </div>
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