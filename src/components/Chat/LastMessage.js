import React from 'react';
import {ReactComponent as Edit} from "../../assets/icons/light/Edit.svg";
import {ReactComponent as Voice} from "../../assets/icons/light/Voice.svg";

function LastMessage({lastMessage}) {

    const senderName = lastMessage.sender.firstname
        ? lastMessage.sender.firstname
        : lastMessage.sender.lastname;

    const item = () => {

        const message = <>
            <span className="small lighten" style={{textTransform: 'capitalize'}}>
                        {senderName}:
                    </span>
            <span className="small">{lastMessage.content.message}</span>
        </>

        const typing = <>
            <span className="small lighten start" style={{gap: 5}}>
                 <Edit className={'typing-icon'}/>
                 <span style={{textTransform: 'capitalize'}}>{lastMessage.isTyping.name}</span> is typing...
            </span>
        </>
        const audio = <>
            <span className="small lighten start" style={{gap: 5}}>
                 <Voice className={'audio-icon'}/>
                 Voice message
            </span>
        </>

        switch (true) {
            case (lastMessage.isTyping !== false):
                return typing
            case (lastMessage.content.message !== null):
                return message
            case (lastMessage.content.audio):
                return message;
            case (lastMessage.content.media):
                return message;
        }
    }


    return (<>
        <span className="message-label">
            {item()}
        </span>
    </>);
}

export default LastMessage;
