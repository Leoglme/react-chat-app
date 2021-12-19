import React from 'react';
import clsx from "clsx";

function SearchBar(props) {
    return (<>
        <input type="text" placeholder={'Search'} className={clsx('w100')}/>
    </>);
}

export default SearchBar;
