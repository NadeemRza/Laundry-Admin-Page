import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCartShopping, faChartSimple, faChevronDown, faGear, faHouse, faList, faPowerOff, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import "./navigationBar.css";

const NavigationBar = () => {
    
    return(
        <div className="navigation-bar">
            <img className='logo' src={require('../assets/laundry-logo.png')} alt="logo" />
            <div className="navigation-list-section">
                <li className="navigation-list">
                    <FontAwesomeIcon className="dashboard" icon={faHouse} />
                    <span>Dashboard</span>
                </li>
                <li className="navigation-list">
                    <FontAwesomeIcon className="pos" icon={faTag} />
                    <span>Pos</span>
                </li>
                <li className="navigation-list">
                    <FontAwesomeIcon className="orders" icon={faCartShopping} />
                    <span>Orders</span>
                    <FontAwesomeIcon className="down-arrow" icon={faChevronDown} />
                </li>
                <li className="navigation-list">
                    <FontAwesomeIcon className="order-status" icon={faList} />
                    <span>Order Status Screen</span>
                </li>
                <li className="navigation-list">
                    <FontAwesomeIcon className="expense" icon={faBook} />
                    <span>Expense</span>
                    <FontAwesomeIcon className="down-arrow" icon={faChevronDown} />
                </li>
                <li className="navigation-list">
                    <FontAwesomeIcon className="customers" icon={faUser} />
                    <span>Customers</span>
                </li>
                <li className="navigation-list">
                    <FontAwesomeIcon className="services" icon={faTag} />
                    <span>Services</span>
                    <FontAwesomeIcon className="down-arrow" icon={faChevronDown} />
                </li>
                <li className="navigation-list">
                    <FontAwesomeIcon className="reports" icon={faChartSimple} />
                    <span>Reports</span>
                </li>
                <li className="navigation-list">
                    <FontAwesomeIcon className="setting" icon={faGear} />
                    <span>Tools</span>
                    <FontAwesomeIcon className="down-arrow" icon={faChevronDown} />
                </li>
                <li className="navigation-list">
                    <FontAwesomeIcon className="power-off" icon={faPowerOff} />
                    <span>Logout</span>
                </li>
            </div>
        </div>
    )
}

export default NavigationBar;