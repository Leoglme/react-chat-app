import React, {useEffect, useState} from 'react';
import MembersList from "../components/MembersList";
import ChatBox from "../components/ChatBox";
import MessagesList from "../components/MessagesList";
import {GetUsers} from "../common";
import AvatarMenu from "../components/AvatarMenu";

function Home(props) {
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        await GetUsers(setUsers)
    }, [])
    return (<>
        <div className="layout-left column_container">
            <MessagesList/>
            <AvatarMenu/>
        </div>
        <div className="layout-center">
            {/*<ChatBox users={users}/>*/}
        </div>
        <div className="layout-right">
            {/*<MembersList users={users}/>*/}
        </div>
    </>);
}

export default Home;
