import React from 'react';
import Message from "./Message";
import {userConnected} from "../../common/data";


function Messages({currentChat}) {

    const messages = currentChat.messages;
    const userIsSender = (message) => {
        return userConnected.id === message.sender.id;
    }


    const List = (
        messages.map((message, index) => {
            return (<Message key={index}
                             content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                             received={!userIsSender(message)}
                             sent={userIsSender(message)}
            />)
        })
    )

    return (<>
        <div className="messages">
            {List}
        </div>

    </>);
}

export default Messages;
