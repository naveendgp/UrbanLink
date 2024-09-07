import './forumcard.css'
import unlike from '../../assets/unlike.png'
import comment from '../../assets/comment.png'
import { useNavigate } from 'react-router-dom'
const ForumCard = () => {

    const navigate = useNavigate()

    return (
      <>
        <div className="ForumCard-container" onClick={() => navigate("/discussionforum")}>
          <h2>Forum Title Goes here</h2>
          <div className="EngageContainer tab-left">
            <div className="like-container">
              <img src={unlike} alt="" className="like" />
              <p>2</p>
            </div>

            <div className="like-container left">
              <img src={comment} alt="" className="like" />
              <p>2</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default ForumCard