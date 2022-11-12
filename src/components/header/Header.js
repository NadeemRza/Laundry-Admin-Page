import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck, faCirclePlus, faHouse, faSpinner, faTag, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import  "./header.css";

const Header = () => {
    return(
        <div className="header">
            <div className="headerIconConatiner">
                <FontAwesomeIcon className="icons bar-icon" icon={faBars} />
                <div className="headerRightIcons">
                    <FontAwesomeIcon className="icons" icon={faCirclePlus} />
                    <FontAwesomeIcon className="icons" icon={faTag} />
                    <FontAwesomeIcon className="icons" icon={faUser} />
                    <button className="signinbtn icons">SignIn</button>
                </div>
            </div>
            <div className="headerBoxes">
                <div className="headerBox">
                    <div className="headerBoxLeft">
                    <span className="headerBoxHeading">Pending Order</span>
                    <span className="headerBoxFigures">202</span>
                    </div>
                    <div className="iconRound">
                    <FontAwesomeIcon className="icon pending-orders box-icons" icon={faHouse} />
                    </div>
                </div>
                <div className="headerBox">
                    <div className="headerBoxLeft">
                    <span className="headerBoxHeading">Processing Order</span>
                    <span className="headerBoxFigures">99</span>
                    </div>
                    <div className="iconRound">
                    <FontAwesomeIcon className="icon processing-orders box-icons" icon={faSpinner} />
                    </div>
                </div>
                <div className="headerBox">
                    <div className="headerBoxLeft">
                    <span className="headerBoxHeading">Ready To Deliver</span>
                    <span className="headerBoxFigures">263</span>
                    </div>
                    <div className="iconRound">
                    <FontAwesomeIcon className="icon ready-to-deliver-orders box-icons" icon={faThumbsUp} />
                    </div>
                </div>
                <div className="headerBox">
                    <div className="headerBoxLeft">
                    <span className="headerBoxHeading">Delivered Orders</span>
                    <span className="headerBoxFigures">345</span>
                    </div>
                    <div className="iconRound">
                    <FontAwesomeIcon className="icon delivered-orders box-icons" icon={faCheck} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;