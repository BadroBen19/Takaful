import './forgot.css';
import React, { useState } from 'react';
import Email from './email';

export default function Forgot(){
    const [fadeOut, setFadeOut] = useState(false);


    const handleButtonClick = () => {

        setFadeOut(!fadeOut);
    
      };
  
return(
    
<div class="forg1">
    <h1 class="tfg1"> Forgot Your Password?</h1>
<p class="text1">Enter your email to receive a password reset link.</p>
<input type="email" id="input" placeholder="Email" /><br></br>
<button onClick={handleButtonClick} class="rpass">Reset Password</button>

{fadeOut && <Email />}
</div>

  


);



}