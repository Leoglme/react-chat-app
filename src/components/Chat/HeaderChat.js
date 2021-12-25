import React from 'react';
import {ReactComponent as Category} from "../../assets/icons/curved/Category.svg";
import AvatarGroup from "../common/AvatarGroup";
import Avatar from "../common/Avatar";

function HeaderChat({title, users}) {

    const AvatarList = (
        users.map((user, index) => {
          return <Avatar key={index} image={user.image} user={user} size={25} mr={5}/>
        })
    )

    return (<>
        <div className="chat-header">
            <div className='start'>
                <Category/>
                <h6 className="text-h6 ml-2 mr-1" style={{textTransform: 'capitalize'}}>
                    {title}
                </h6>
                <h6 className="text-h6 lighten" style={{fontWeight: 400}}>
                    24
                </h6>
            </div>
            {users.length > 0 && <AvatarGroup max={2} size={25}>
                {AvatarList}
            </AvatarGroup>}
        </div>
    </>);
}

export default HeaderChat;
