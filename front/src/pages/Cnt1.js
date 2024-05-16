import './Cnt1.css';
import imc1 from'../image/2.1.png';
import imc2 from'../image/2.2.png';
import imc3 from'../image/2.3.png';
import imc4 from'../image/2.4.png';
import imc5 from'../image/2.5.png';
import imc6 from'../image/2.6.png';
import imc7 from'../image/2.7.jpeg';



export default function Cnt1(){
    return(
<>


        <div class="cnt22">
        <h1 class="ttt1">Empower Change Start Donating Today</h1>
        <div class="hd1">
            <div class="col">
            </div>
                <p class="prgc11">
              Begin your journey to make a difference by directly <br></br>contributing to individuals in need. Whether you're <br></br>seeking to provide personal support or contribute to a <br></br>specific cause ,   <span class="gras">Please select the category in which you <br></br>  would like to make a donation:</span>
        
        
                </p>
            
        </div>
        
        
        
        
           </div>

           <div class="cnt3">
    <a href="">
<div class="c1">
    <img src={imc1} class="imc1"/>

<h1 class="tc11">  Disease research <br></br> and treatment</h1>



</div>
</a>
<a href="">
<div class="c1">
<img src={imc2} class="imc2"/>
    <h1 class="tc1">Providing aid to the   <br></br> impoverished </h1>
    </div>
</a>
<a href="">
<div class="c1">
<img src={imc3} class="imc2"/>
<h1 class="tc1"> Supporting victims   <br></br> of natural disasters</h1>

</div>
</a>
<a href="">
<div class="c1">
<img src={imc4} class="imc2"/>
<h1 class="tc1">  Funding scientific  <br></br> research</h1>

</div>
</a>
<a href="">
<div class="c1">
<img src={imc5} class="imc2"/>
<h1 class="tc1"> Providing education   <br></br> for underprivileged <br></br> groups </h1>

</div>
</a>
<a href="">
<div class="c1">
<img src={imc6} class="imc3"/>
<h1 class="tc11">  Supporting sociel <br></br> programs for <br></br>disadvantaged <br></br>children</h1>

</div>
</a>
<a href="">
<div class="c1">
<img src={imc7} class="imc2"/>

    <h1 class="tc1"> others causes  .. </h1>
</div>
</a>



</div>
</>



    );
}