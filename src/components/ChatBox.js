import React from 'react';
import Messages from "./Chat/Messages";
import HeaderChat from "./Chat/HeaderChat";

function ChatBox({users}) {
    return (<>
        <HeaderChat users={users} title={"chat"}/>
        <Messages/>
    </>);
}

export default ChatBox;
