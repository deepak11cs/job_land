import React from 'react';
import './Jobcard.css';
export default (props)=>{
    let data = props.data.map(ele=>{
        if(ele.company === "See All"){
            return (
                <div id="card-all">
                    
                    <a href="jsx-a11y/anchor-is-valid">See All</a>
                </div>
            )
        }
        return (
            <div id="card">
                <img src={ele.icon} alt={ele.company + " icon"} id="com-icon"/>
                <div id="com-name">
                    {ele.company}
                </div>
                <div id="com-pos">
                    {ele.job}
                </div>
                <div id="com-loc">
                    {ele.location}
                </div>

            </div>
        )
    });
    return (
        <div id="cards">
            {data}
        </div>
    );
}