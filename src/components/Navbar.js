import React from 'react';
import './Navbar.css';
import Container from './Container';

export default ()=>{
    const triggerText = 'Login';
    const onSubmit = (event) => {
        event.preventDefault(event);
        this.closeModal();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    };
    return (
        <div className="navbar">
            <div id="companyname">Job Land</div>
            <div id="navcontrols">
                <div id="explore">Explore</div>
                <Container triggerText={triggerText} onSubmit={onSubmit} /> 
            </div>
            
        </div>
    );
}