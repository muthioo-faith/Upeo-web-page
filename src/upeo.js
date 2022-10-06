import React from 'react';
import "./upeo.css"
import pic from "./lad.png";
import logo from "./upeologo.png";
import person from "./nakayiza.png";
import pers from "./nalenyi.png";
import perso from "./faith.png";
import persoo from "./chiri.png";
import persoon from "./respa.png";





import ussd from "./ussd.png";

const Navbar=()=>{
  return(
<body>
    <div>
      <nav>
        <ul>
        <div class="topnav">
{/* <div className='logo'>
    <img src={logo} alt='./upeologo.png'/>

  </div> */}

  <a href="#home">Home</a>
  <a href="#about us">About us</a>
  <a href="#technology">Technology</a>
  <a href="#contact">Contact</a>
  <div className='logo'>
    <img src={logo} alt='./upeologo.png' width={140}/>

  </div>

  <div className='image'>
    <img src={pic} />

  </div>
</div>
<h2>About Us</h2>
<p>We discovered that their is a problem, 
  where  pregnant<br></br> teenage girls who drop out 
  of school are unable to continue <br></br> their education
   while on maternity. We also found out that <br></br>  when 
   they return to school they have forgotten what they <br></br> 
   learned .We decided to come up with Quicksoma platform<br></br> 
    which is an interactive learning channel that provides<br></br> 
     revision questions for them to continue learning while<br></br>  
     on Maternity.
</p>
<h3>How it works</h3>
<div className='ussd'>
    <img src={ussd} alt='./ussd.png' width={450}/>

  </div>
<h6>QuickSoma is an offline  learning platform that uses a USSD 
  code with<br></br> the goal of assisting  pregnant teenage students
  while on maternity.They<br></br> will use feature phones to help them 
  access and tackle questions that <br></br>will help them revise and  stay 
  on top of their academics in a variety of subjects, 
  <br></br>such as mathematics. </h6>

  <h5>Team</h5>
<div className='person'>
    <img src={person} alt='./nakayiza.png'/>

  </div>

  <div className='person1'>
    <img src={pers} alt='./nalenyi.png'/>

  </div>
  

  <div className='person2'>
    <img src={perso} alt='./faith.png'/>

  </div>
  <div className='person3'>
    <img src={persoo} alt='./chiri.png'/>

  </div>
  <div className='person4'>
    <img src={persoon} alt='./respa.png'/>

  </div>

</ul>

</nav>

</div>
</body>
  )
  
}
export default Navbar;