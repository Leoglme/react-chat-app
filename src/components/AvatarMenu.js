import React, {useState} from 'react';
import Avatar from "./common/Avatar";
import {userConnected} from "../common/data";
import clsx from "clsx";

function AvatarMenu(props) {
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen(!open)
    }

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
            <div className={clsx("avatar-menu", open ? 'active' : null)}>
                <ul>
                    {items.map(item => {
                        return <li key={item.name}>{item.name}</li>
                    })}
                </ul>
            </div>

            <div className="start" style={{gap: 12}}>
                <div className={"border-avatar"} onClick={handleMenu}>
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
