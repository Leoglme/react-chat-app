import React from 'react';
import clsx from "clsx";

function Message({sent, received, content}) {
    console.log({sent, received});
    return (<>
        <div className={clsx('message', sent ? 'sent' : null, received ? 'received' : null)}>
            {content}
        </div>
    </>);
}

export default Message;
