import './questioncard.css'
import user from '../../assets/user.png'
import like from '../../assets/like.png'
import unlike from '../../assets/unlike.png'
import comment from '../../assets/comment.png'
const QuestionCard = () => {

    return (
      <>
        <section className="QuestionCard-Container" style={{backgroundColor:"white"}}>
          <div className="Userdetails">
            <img src={user} alt="" className="questionCard-userImg" />
            <aside>
              <h3>UserName</h3>
              <p>
                Desigination <span>•</span>4 Days ago
              </p>
            </aside>
          </div>
          <h2 className="ForumQuestion">
            The Question Asked in the forum goes here
          </h2>
          <div className="EngageContainer">
            <div className="like-container">
              <img src={unlike} alt="" className="like" />
              <p>2</p>
            </div>

            <div className="like-container left">
              <img src={comment} alt="" className="like" />
              <p>2</p>
            </div>
          </div>
        </section>
      </>
    );
}

export default QuestionCard