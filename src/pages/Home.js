import React from 'react';
import MembersList from "../components/MembersList";
import ChatBox from "../components/ChatBox";
import MessagesList from "../components/MessagesList";

function Home(props) {
    return (<>
        <div className="layout-left">
            <MessagesList/>
        </div>
        <div className="layout-center">
            <ChatBox/>
        </div>
        <div className="layout-right">
            <MembersList/>
        </div>
    </>);
}

export default Home;
