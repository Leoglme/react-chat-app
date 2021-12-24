import React from 'react';
import Messages from "./Chat/Messages";
import HeaderChat from "./Chat/HeaderChat";

function ChatBox(props) {
    return (<>
        <HeaderChat title={"chat"}/>
        <Messages/>
    </>);
}

export default ChatBox;
