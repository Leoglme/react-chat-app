import React from 'react';
import Avatar from "./common/Avatar";
import {userConnected} from "../common/data";

function AvatarMenu(props) {
    const items = [
        {
            name: 'Profile',
            icon: 'toto'
        },
        {
            name: 'Logout',
            icon: 'toto'
        }
    ]


    return (<>
        <div style={{position: "absolute", bottom: 24, left: 28}}>
            <div className="avatar-menu">
                <ul>
                    {items.map(item => {
                        return <li>{item.name}</li>
                    })}
                </ul>
            </div>

            <div className="start" style={{gap: 12}}>
                <div className="border-avatar">
                    <Avatar
                        image={userConnected.image}
                        user={userConnected}
                        size={42}
                        radius={15}
                    />
                </div>
                <h5 className="text-h5">{userConnected.name}</h5>
            </div>
        </div>
    </>);
}

export default AvatarMenu;
