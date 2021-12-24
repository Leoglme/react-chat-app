import React from 'react';
import RecentMessages from "./Chat/RecentMessages";
import {ReactComponent as EditSquare} from "../assets/icons/curved/EditSquare.svg";

function MessagesList(props) {
    return (<>
        <div className="space-between w100">
            <h4 className="block-title">Messages</h4>
            <div className="pointer center">
                <EditSquare/>
            </div>
        </div>
        <RecentMessages/>
    </>);
}

export default MessagesList;
