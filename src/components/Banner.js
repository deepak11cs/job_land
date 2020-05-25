import React from 'react';
import './Banner.css';
import Searchbar from './Searchbar';

export default ()=>{
    return (
        <div className="banner">
            <div id="background">
                {/*<img id="background-image" src={require('../bg.jpg')} alt="background "/>*/}
            </div>
            <Searchbar />
            <div id="banner-button">

            </div>
        </div>
    );
}