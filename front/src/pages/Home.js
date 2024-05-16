import chib from'../image/1 bel backg.png';
import './Home.css'
import React, { useState } from 'react';
import sand from'../image/3 belbackg.png';
import bz from '../image/4 back.png'
import Newpage from './Newpage';
import Newpage2 from './Newpage2';
import Descript from './Descript';
import Cnt1 from './Cnt1';


const Home = () => {

    const [fadeOut, setFadeOut] = useState(false);
    const [diaa, setdiaa] = useState(false);
  
    const handleButtonClick = () => {

        setFadeOut(!fadeOut);
    
      };
      // ghbzfjnkzj,lkl,lnl
      const handl2 = () => {

        setdiaa(!diaa);
    
      };
  
return(
    
    <div class="page1">
     
    <div class="inter">
    <div class="ro">
<p class="t1z"> Building a</p> <p class="t1z" >Better</p> <p class="t1z">Future Througth </p>  <p class="t1a">Giving</p>  
<p class="ppp1">Join us in creating a ripple of change,help <br/> those in need by donating or receiving <br/> donations.</p>
<div class="bot">
    <div>
<button  onClick={handleButtonClick} id="bth1"> Receive Donation </button>
<div className={fadeOut ? 'fade-out' : 'fade-in'}></div>
{fadeOut && <Newpage />}
</div>
<a href="#cat">
<button id="bth2">  Donate Now</button>
</a>
</div>
</div>
<div class="in2">
    
        <img src={chib} class="img1" />
</div>
    </div>
    <div id="cat">
    <Cnt1/>
    </div>
    <div class="inter2">
    <div class="ror">
<p class="t21">Introducing Our <br></br>Specially Designed <br></br>Donation Center just <br></br>for you!</p>  
<p class="pp21">Easily gather donations quickly <br></br>through our donation pot creation <br></br>feature..</p>
<div class="bot">
    <div>

<button  onClick={handl2}id="bbt1"> Receive Donation</button>
<div className={diaa ? 'fade-out' : 'fade-in'}></div>
{diaa && <Newpage2 />}

</div>

</div>
</div>
<div class="diaaf">
    
        <img src={sand} class="mpi" />
</div>
    </div>
    <div class="inter2">
    <div class="ror2">
<p class="t212">Life-Altering <br></br>Testimonies:Stories  <br></br>of Transformation<br></br>for you!</p>  


    <div>





</div>
</div>
<div class="diaaf">
    
        <img src={bz} class="mpi2" />
</div>
    </div>
    <Descript/>
 
    </div>



);





}
export default Home;