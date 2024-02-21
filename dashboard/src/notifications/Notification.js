import React from "react";
import "./Notifications.css";
import CloseIcon from '../assets/close-icon.png'
import { getLatestNotifications } from "../utils/utils";

const Notifications = () => {
    return ( 
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button style={{position: 'absolute', right: 10, top: 10, background: 'none', border: 'none'}} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
                <img style={{display: 'inline', marginTop: '5px', marginRight: '5px', padding: '0'}} src={CloseIcon} alt="Close" width= '15px'/>
            </button>

            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotifications() }}></li>        
            </ul>
        </div>
     );
}
 
export default Notifications;