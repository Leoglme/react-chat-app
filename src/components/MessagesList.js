import React from 'react';
import SearchBar from "./common/SearchBar";
import RecentMessages from "./Chat/RecentMessages";

function MessagesList(props) {
    return (<>
        <SearchBar/>
        <RecentMessages/>
    </>);
}

export default MessagesList;