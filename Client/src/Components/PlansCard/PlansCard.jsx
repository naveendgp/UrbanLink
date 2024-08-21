import "./planscard.css";
import vale from "../../assets/valve.png"
import wip from "../../assets/wip.png";

const PlansCard = ({constructionname,status,onClick}) => {

  const getLogo = constructionname  === "Road Construction" ? wip : vale
  console.log(getLogo)

  return (
    <>
      <div className="PlansCard-container">
        <div className="construction-logo">
          <img className="construction-image" src={getLogo} alt="" />
        </div>
        <div className="construction-name ">
          <h3>{constructionname}</h3>
        </div>
        <div className="construction-location">Perundurai</div>
        <div className="construction-status completed">{status}</div>
        <button className=" view" onClick={onClick}>View</button>
      </div>
    </>
  );
};

export default PlansCard;
