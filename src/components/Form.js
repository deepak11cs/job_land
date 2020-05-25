import React from 'react';
import './Form.css';
export const Form = ({ onSubmit }) => {
return (
<form onSubmit={onSubmit}>
  <div className="con">
    <header className="head-form">
      <h2>Log In</h2>
      <p>login here using your username and password</p>
    </header>
    <br/>
    <div className="field-set">
      <span className="input-item">
        <i className="fa fa-user-circle"></i>
      </span>
      <input className="form-input" id="txt-input" type="text" placeholder="@UserName"/>
      <br/>
      <span className="input-item">
        <i className="fa fa-key"></i>
      </span>
      <input className="form-input" type="password" placeholder="Password" id="pwd"  name="password" />
     
      <span>
        <i className="fa fa-eye" aria-hidden="true"  type="button" id="eye"></i>
      </span>
     
     
      <br/>
      <button className="log-in"> Log In </button>
    </div>
  
    <div className="other">
      <button className="frgt-pass">Employer login</button>
      <button className="btn submits sign-up">Sign Up 
        <i className="fa fa-user-plus" aria-hidden="true"></i>
      </button>
   </div>
     
  </div>
  
</form>
);
};
export default Form;