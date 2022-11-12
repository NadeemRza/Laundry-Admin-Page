import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatCowboy, faShirt } from "@fortawesome/free-solid-svg-icons";
import "./cards.css";

const Cards = () => {
  return (
    <div className="order-cards">
      <div className="card card-processing">
        <div className="card-head">
          <span>NADEEM</span>
          <span>ORD-0948</span>
        </div>
        <div className="card-icons">
          <FontAwesomeIcon className="icon shirt-icon" icon={faShirt} />
        </div>
      </div>
      <div className="card card-cancelled">
        <div className="card-head">
          <span>ARIF</span>
          <span>ORD-0949</span>
        </div>
        <div className="card-icons">
          <FontAwesomeIcon className="icon shirt-icon" icon={faShirt} />
          <FontAwesomeIcon className="icon shirt-icon" icon={faShirt} />
        </div>
      </div>
      <div className="card card-pending">
        <div className="card-head">
          <span>SHREYAS</span>
          <span>ORD-0950</span>
        </div>
        <div className="card-icons">
            <FontAwesomeIcon className="icon shirt-icon" icon={faShirt} />
            <FontAwesomeIcon className="icon cap-icon" icon={faHatCowboy} />
        </div>
      </div>
      <div className="card card-pending">
        <div className="card-head">
          <span>Walk In Customer</span>
          <span>ORD-0951</span>
        </div>
        <div className="card-icons">
          <FontAwesomeIcon className="icon shirt-icon" icon={faShirt} />
          <FontAwesomeIcon className="icon cap-icon" icon={faHatCowboy} />
        </div>
      </div>
      <div className="card card-delivered">
        <div className="card-head">
          <span>REHMAN</span>
          <span>ORD-0952</span>
        </div>
        <div className="card-icons">
          <FontAwesomeIcon className="icon shirt-icon" icon={faShirt} />
          <FontAwesomeIcon className="icon shirt-icon" icon={faShirt} />
          <FontAwesomeIcon className="icon cap-icon" icon={faHatCowboy} />
        </div>
      </div>
      <div className="card card-delivered">
        <div className="card-head">
          <span>Walk In Customer</span>
          <span>ORD-0952</span>
        </div>
        <div className="card-icons">
            <FontAwesomeIcon className="icon cap-icon" icon={faHatCowboy} />
            <FontAwesomeIcon className="icon shirt-icon" icon={faShirt} />
            <FontAwesomeIcon className="icon shirt-icon" icon={faShirt} />
            <FontAwesomeIcon className="icon shirt-icon" icon={faShirt} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
