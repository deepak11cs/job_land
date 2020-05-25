import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
return (
<div
  id="login-btn"
  ref={buttonRef}
  onClick={showModal}
 >
 {triggerText}
</div>
);
 };
export default Trigger;