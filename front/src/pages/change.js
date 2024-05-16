import './change.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
export default function Change(){
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');
  
  
    const handleSubmit = (event) => {
  
      event.preventDefault();
  
      console.log(`Username: ${username}, Password: ${password}`);
  
      // Add your login logic here
  
    };

return(
<div class="toutc">

<FontAwesomeIcon className='clockkk' icon={faLock} />
<p class="ptc">Change Your Password</p>

<form onSubmit={handleSubmit}>

        

        <input type="text"  placeholder="new password" class="cp" value={username} onChange={(event) => setUsername(event.target.value)} />

        <br />

        

        <input type="password" class="cp" placeholder="confirm your new password" value={password} onChange={(event) => setPassword(event.target.value)} />

        <br />

        <input type="submit" class="cpp" value="change password" />

      </form>




</div>






);




}