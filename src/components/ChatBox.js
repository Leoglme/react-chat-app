import React from 'react';
import Messages from "./Chat/Messages";
import HeaderChat from "./Chat/HeaderChat";
import MessageField from "./Chat/MessageField";

function ChatBox({users}) {
    return (<>
        <HeaderChat users={users} title={"chat"}/>
        <Messages/>
        <MessageField/>
    </>);
}

export default ChatBox;
