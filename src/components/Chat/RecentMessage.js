import React from 'react';
import Avatar from "../common/Avatar";
import {dateToHour} from "../../common";
import clsx from "clsx";

function RecentMessage({discussion, active}) {

    const lastMessage = discussion.messages[discussion.messages.length - 1];


    const senderName = lastMessage.sender.firstname
        ? lastMessage.sender.firstname
        : lastMessage.sender.lastname;

    return (<>
        <div className={clsx('recent-message space-between', active ? 'active' : null)}>
            <Avatar/>
            <div className="space-between" style={{flex: '1'}}>
                <div style={{marginLeft: 20}}>
                    <span className="discussion-name">
                    {discussion.name}
                </span>
                    <span className="message-label">
                    <span className="small lighten" style={{textTransform: 'capitalize'}}>
                        {senderName}:
                    </span>
                    <span className="small">{lastMessage.content}</span>
                </span>
                </div>
                <span className="small time">{dateToHour(discussion.updated_at)}</span>
            </div>
        </div>
    </>);
}

export default RecentMessage;
