import React from 'react';
import {GetInitial} from "../../common";
import clsx from 'clsx';

function Avatar({image, user, size, ml, mr}) {
    const fullName = user ? user.firstname + " " + user.lastname : "Anonymous";
    const computeSize = size || 45;
    return (<>
        <div className={clsx('avatar', !image ? 'avatar-initial' : null)}
             style={{
                 width: computeSize, height: computeSize,
                 marginLeft: ml,
                 marginRight: mr,
                 fontSize: image ? null : `calc(16px * ${computeSize} / 36)`
             }}>
            {image ? <img src={image} alt={"profile picture of " + fullName}/>
                : <h5 className="initial">{GetInitial(fullName)}</h5>}
        </div>
    </>);
}

export default Avatar;