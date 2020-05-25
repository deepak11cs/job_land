import React from 'react';
import './Searchbar.css';

export default ()=>{
    return (
        <div className="search-bar">
            <div id="search-input">
                <input type="text" id="search-query" placeholder="Search jobs by keyword"></input>
            </div>
            <div id="search-button">

            </div>
        </div>
    );
}