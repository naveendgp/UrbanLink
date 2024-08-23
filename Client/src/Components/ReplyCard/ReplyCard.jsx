import user from '../../assets/user.png'
import reply from '../../assets/reply.png'
import './replycard.css'
const ReplyCard = () => {

    return(
        <>
            <section className="ReplyCard-Container" style={{backgroundColor:"white"}}>
                <div className="replycard-username">
                    <img src={user} alt=""/>
                    <p>Username</p>

                    <h5>11:52 p.m</h5>
                </div>
                <div className="replycard-Answer">
                    <h3>Reply from the user goes here</h3>
                </div>
                <div className='reply-card'>
                    <img src={reply} alt="" className='reply-img'/>
                    <p>reply</p>
                </div>
            </section>
        </>
    )
}

export default ReplyCard