import React from 'react';
import Avatar from "../common/Avatar";
import {dateToHour} from "../../common";

function RecentMessage({discussion}) {

    console.log("discussion", discussion);

    const lastMessage = discussion.messages[discussion.messages.length - 1];


    const senderName = lastMessage.sender.firstname
        ? lastMessage.sender.firstname
        : lastMessage.sender.lastname;

    return (<>
        <div className="recent-message space-between">
            <Avatar/>
            <div className="space-between" style={{flex: '1'}}>
                <span className="discussion-name">
                    {discussion.name}
                </span>
                <span className="message-label">
                    <span className="small lighten">{senderName}: </span>
                    <span className="small">{lastMessage.content}</span>
                </span>
                <span className="small time">{dateToHour(discussion.updated_at)}</span>
            </div>
        </div>
    </>);
}

export default RecentMessage;
