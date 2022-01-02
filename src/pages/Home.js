import React, {useEffect, useState} from 'react';
import MembersList from "../components/MembersList";
import ChatBox from "../components/ChatBox";
import MessagesList from "../components/MessagesList";
import AvatarMenu from "../components/AvatarMenu";
import {users} from "../common/data";

function Home(props) {

    return (<>
        <div className="layout-left column_container">
            {/*<MessagesList/>*/}
            {/*<AvatarMenu/>*/}
        </div>
        <div className="layout-center">
            <ChatBox users={users}/>
        </div>
        <div className="layout-right">
            {/*<MembersList users={users}/>*/}
        </div>
    </>);
}

export default Home;
