import React from 'react';
import Jobcard from './Jobcard';
import './Jobboard.css';

export default ()=>{
    let data = [{company: "Google",icon:'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png', job:'software-engineer',location: 'Chennai',openings: 6},
        {company: "Microsoft",icon:'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png', job:'software-engineer',location: 'Chennai',openings: 6},
        {company: "Walt disney",icon:'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/walt-disney-logo.png', job:'software-engineer',location: 'Chennai',openings: 6},
        {company: "Samsung",icon:'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/samsung-logo.png', job:'software-engineer',location: 'Chennai',openings: 6},
        {company: "AT & T",icon:'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/att-logo.png', job:'software-engineer',location: 'Chennai',openings: 6},
        {company: "Louis Vuitton",icon:'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/louis-vuitton-logo.png', job:'software-engineer',location: 'Chennai',openings: 6},
        {company: "intel",icon:'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/intel-logo.png', job:'software-engineer',location: 'Chennai',openings: 6},
        {company: "See All"}];
    return (
        <>
        <div id="updates">
            <h3>Amazon</h3><br/>
            <p>128 New Openings</p><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>
            <a href="jsx-a11y/anchor-is-valid">More info</a>
        </div>
        <div className="job-board">

            
            <div id="board-head">
                Job Openings
            </div>
            

            <Jobcard data={data} />

        </div></>
    );
}