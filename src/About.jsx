import styles from './About.module.css'
import A1 from './assets/Aboutimg1.jpg'
import A2 from './assets/Aboutimg2.jpg'
import A3 from './assets/Aboutimg3.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navlogo from './assets/Navlogo.jpg'
import { FaFacebook, FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom"


function About(){

    return(

<>  
             {/** Navbar */}



      {/*About image*/}
    <div  className={styles.galleryimg}>
      <h2  className={styles.gallerycontent}>About us</h2>
    </div>
    <hr />

    
<div className={styles.about}>
  <img className={styles.aboutimage1} src={A1} alt="Image" />
  <div style={{marginRight:"40px"}}>
  <h4 style={{fontStyle:"italic", fontSize:"40px", fontWeight:"lighter", fontFamily:"fantasy"}}>Eat Burger</h4><h2 style={{fontSize:"60px", color:"red"}}>1️⃣ Our Story🍔
</h2><h5 style={{fontSize:"46px", fontWeight:"lighter"}}>
Founded in 2025, Ear Burger was born with a simple idea – to create burgers that are as joyful as music to your taste buds. What started as a small food corner has now become a favorite spot for burger lovers.🎶🍔</h5>

</div>
</div>

<hr />
    
<div className={styles.about}>
  <img className={styles.aboutimage2} src={A2} alt="Image" />
  <div style={{marginRight:"40px"}}>
  <h2 style={{fontSize:"60px", color:"red"}}>2️⃣ Our Food
</h2><h5 style={{fontSize:"40px", fontWeight:"lighter"}}>Welcome to Ear Burger, where flavor speaks louder than words.We believe great taste begins with fresh ingredients. From our juicy burgers and crispy fries to creamy shakes and indulgent desserts, every item is made with care and passion. Our signature Ear Burger Special is crafted to give you a unique flavor you won’t find anywhere else. 🍔✨</h5>

</div>
</div>
<hr />

    
<div className={styles.about}>
  <img className={styles.aboutimage3} src={A3} alt="Image" />
  <div style={{marginRight:"40px"}}>
  <h2 style={{fontSize:"60px", color:"red"}}>3️⃣ Our Promise
</h2><h5 style={{fontSize:"46px", fontWeight:"lighter"}}>At Ear Burger, it’s not just about food – it’s about experience. We promise quality, flavor, and a cozy space where families and friends can come together. Every bite is made to bring happiness, comfort, and unforgettable taste.  🎶🍔</h5>

</div>
</div>


<hr />

{/* Footer */}
  <div className={styles.Hfooterimg} >
 
<div className={styles.footercontainer}  style={{textAlign:"center"}}>
    
    <div style={{margin:"30px", cursor:"pointer"}}>
      <div><h3><u>Shop Info</u></h3>
          <h5>Ear Burger 🍔</h5>
         <h5> "Where every bite is <br />  music to your taste <br /> buds."</h5>
          <h5>Since 2025</h5>
          </div>
    </div>

    <div>
      <div style={{margin:"30px", cursor:"pointer",textAlign:"center"}} >
        <h3><u>Quick Links</u></h3>
         <Nav.Link href="#home"><b>Home</b></Nav.Link> 
           <Nav.Link href="#home"><b>Menu</b></Nav.Link> 
             <Nav.Link href="#home"  style={{marginTop:"5px"}}><b>Gallery</b></Nav.Link> 
               <Nav.Link href="#home"  style={{marginTop:"5px"}}><b>About Us</b></Nav.Link> 
                 <Nav.Link href="#home"  style={{marginTop:"5px"}}><b>Contact</b></Nav.Link> 
                   <Nav.Link href="#home"  style={{marginTop:"5px"}}><b>Order Now</b></Nav.Link>
      </div>
    </div>



    <div style={{margin:"30px", cursor:"pointer"}}>
      <div style={{textAlign:"center"}}>
        <h3><u>Contact Us</u></h3>
        <h5>📍Address: No 6, 6th Street ,<br /> Crosscut Road<br />Coibatore - 641 012.</h5>
        <h5>📞Phone: +91 9384272748</h5>
        <h5>✉️Email: earburger@gmail.com</h5>
      </div>
    </div>


    <div style={{margin:"30px", cursor:"pointer"}}>
      <div>
        <h3><u>Follow Us</u></h3>
        <p>
        <FaFacebook /> Facebook: @earburger
        </p>
        <p>
          <FaInstagram /> Instagram: @earburger_official
        </p>

           <h3><u>Timings</u></h3>
            <p>Mon - Sun: 10:00am to 11:00pm</p>


      </div>
    </div>


  </div>

<hr style={{color:"white", marginTop:"90px"}}/>

<h5 style={{marginTop:"30px", textAlign:"center", color:"white",cursor:"pointer"}}>Copyright © 2025 Ear Burger. All Rights Reserved.</h5>
</div>

        

     


</>
      
    )
}

export default About;