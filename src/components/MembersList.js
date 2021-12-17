import React, {useEffect, useState} from 'react';
import {GetUsers} from '../common'
import Spinner from "./common/Spinner";
import {MoreCircle} from "react-iconly";

function MembersList(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        GetUsers(setUsers)
    }, [])

    const List = (
        users.length > 0 ? <ul>
            {users.map((user, index) => {
                return (
                    <li key={index}>{user.lastname}</li>
                )
            })}
        </ul> : <Spinner/>
    )
    return (<>
        <div className="column_container">
            <div className="column_header">
                <MoreCircle set="curved" primaryColor="blueviolet"/>
                <h6>Chat Details</h6>
                <div className="empty_block"/>
            </div>
            {List}
        </div>
    </>);
}

export default MembersList;
