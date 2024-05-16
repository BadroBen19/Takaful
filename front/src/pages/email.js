import './email.css';
export default function Email(){
var emailname="hda ri example@dz";
return(
    <div class="emailsent">
    <p class="t1">Instructions Sent</p>
    <p class="pr1"> 
    We sent instructions to change your
</p>
    <p class="pr1"> 
    password to {emailname}
</p>
    <p class="pr1"> 
        please check both your  inbox and spam 
    </p>
    <p class="pr1"> 
        folder
    </p>
    <a href="/change"><button class="ok">Okay</button></a>
    
    
    
    
    
    </div>





);


}