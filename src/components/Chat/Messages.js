import React from 'react';
import Message from "./Message";


function Messages(props) {


    const List = (
        messages.map((message, index) => {
            return (<Message key={index}
                             content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                             received={user.id === message.receiver.id}
                             sent={user.id === message.sender.id}
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
