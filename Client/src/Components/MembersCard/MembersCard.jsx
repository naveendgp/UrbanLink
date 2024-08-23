import './memberscard.css'
import user from '../../assets/user.png'

const MembersCard = () => {

    return (
      <>
          <div className="Members-list" style={{backgroundColor:"white"}}>
            <img src={user} alt="" className="user-img" />
            <aside>
                <h3>UserName</h3>
                <p>Designation</p>
            </aside>
          </div>
      </>
    );
}

export default MembersCard;