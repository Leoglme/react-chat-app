import React from 'react';
import clsx from "clsx";

function SearchBar(props) {
    return (<>
        <input type="text"
               placeholder={'Search'}
               style={{width: '93%', marginBottom: 16, marginTop: 16}}
        />
    </>);
}

export default SearchBar;
