import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./infohead.css";

const InfoHead = () => {
  return (
    <div className="infohead">
      <span className="infohead-heading">Today's Delivery</span>
      <div className="infohead-right">
        <input
          className="infohead-input"
          type="text"
          placeholder="Search Here"
        />
        <div className="sortbox">
          <span className="sortbox-title">All Orders</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </div>
  );
};

export default InfoHead;
