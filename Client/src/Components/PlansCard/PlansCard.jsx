import "./planscard.css";

const PlansCard = ({constructionname,status}) => {
  return (
    <>
      <div className="PlansCard-container">
        <div className="construction-logo"></div>
        <div className="construction-name ">
            <h3>{constructionname}</h3>
        </div>
        <div className="construction-location">
            Perundurai
        </div>
        <div className="construction-status completed">
            {status}
        </div>
      </div>
    </>
  );
};

export default PlansCard;