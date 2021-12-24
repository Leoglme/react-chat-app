import React from 'react';
import {ReactComponent as Category} from "../../assets/icons/curved/Category.svg";

function HeaderChat({title}) {
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
        </div>
    </>);
}

export default HeaderChat;
