import React, {Component} from 'react'
import "./upeo.css"
import ussd from "./ussd.png";
import pic from "./lad.png";
import upe from "./pre.png";
import logo from "./upeologo.png";
import person from "./nakayiza.png";
import pers from "./nalenyi.png";
import perso from "./faith.png";
import persoo from "./chiri.png";
import persoon from "./respa.png";

class Navbar extends Component{
    state= {clicked: false}

    render() {
        return(
            <div className='Home'>  
        
           
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
   <img src={pic} alt ='./lad.png'className='images'></img>
 
 </div>


<h2>About Us</h2>
<p>We discovered that their is a problem,
 where  pregnant teenage girls <br></br>  who drop out
 of school are unable to continue their education
  while on maternity.We also found out that when
  they return to school they have <br></br> forgotten what they
  learned .We decided to come up with Quicksoma <br></br> platform
   which is an interactive learning channel that provides
    revision questions for them to continue learning while
    on Maternity.
</p>
<div className='upe'>
   <img src={upe} alt='./pre.png'/>
 
 </div>

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


{/* <div className='learn'>
            <button>Team</button>
            </div> */}
            {/* AGRIACE SERVICES */}
            <div className='services'>
                <h1>Team</h1>
                <div className='cards'>
                    <div className='cardone'>
                    <img src={person} alt='./nakayiza.png' className='card1'></img>
                    <p>Juliet Nakayiza</p>
                    <button className='btn'>Learn More</button>
                    </div>
                    <div className='cardtwo'>
                    <img src={pers} alt='./nalenyi.png' className='card2'></img>
                    <p>Esther Nalenyi</p>
                    <button className='btn2'>Learn More</button>
                    </div>
                    <div className='cardthree'>
                    <img src={perso} alt='./faith.png' className='card3'></img>
                    <p>Faith Mutua</p>
                    <button className='btn3'>Learn More</button>
                    </div>
                    <div className='cardfour'>
                    <img src={persoo} alt='./chiri.png' className='card4'></img>
                    <p>Mercy Jepchirchir</p>
                    <button className='btn4'>Learn More</button>
                    </div>

                    <div className='cardfour'>
                    <img src={persoon} alt='./chiri.png' className='card4'></img>
                    <p>Respah Nafula</p>
                    <button className='btn4'>Learn More</button>
                    </div>

                </div>

            </div>
            {/* FOOTER */}
            <footer className='footer'>
            <div className='contacts_footer'> 
             <h3>Contact Us</h3>
             <h4>upeo@gmail.com</h4>
             <h4>+254784848483</h4>
             </div>
             <div className='location'>
                <h3>Location</h3>
                <h4>Korongo road, Karen</h4>
                </div>
             
            </footer>


            </div> 
            </div>
            
        )
    }
}
export default Navbar
