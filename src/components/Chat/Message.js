import React from 'react';
import clsx from "clsx";

function Message({sent, received}) {
    return (<>
        <div className={clsx('message', sent ? 'sent' : null, received ? 'received' : null)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
    </>);
}

export default Message;
