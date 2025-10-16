import styles from './Gallery.module.css'
import G1 from './assets/G1.jpg'
import G2 from './assets/G2.jpg'
import G3 from './assets/G3.jpg'
import G4 from './assets/G4.jpg'
import G5 from './assets/G5.jpg'
import G6 from './assets/G6.jpg'
import G7 from './assets/G7.jpg'
import G8 from './assets/G8.jpg'
import G9 from './assets/G9.jpg'
import G10 from './assets/G10.jpg'
import G11 from './assets/G11.jpg'
import G12 from './assets/G12.jpg'
import G13 from './assets/G13.jpg'
import G14 from './assets/G14.jpg'
import G15 from './assets/G15.jpg'
import G16 from './assets/G16.jpg'
import G17 from './assets/G17.jpg'
import G18 from './assets/G18.jpg'
import Nav from 'react-bootstrap/Nav';
import { FaFacebook, FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom"

function Gallery(){
    return(
        <>


    {/*Gallery image*/}
    <div  className={styles.galleryimg}>
      <h2  className={styles.gallerycontent}>Gallery</h2>
    </div>


     <h2 className={styles.menutopic}>✨ A showcase of our delicious burgers, crispy sides, and cozy vibes!</h2>

     <div className={styles.gallerycontainer}>
        

                <img src={G1} alt="image" className={styles.galleryimage}/>
                <img src={G2} alt="image" className={styles.galleryimage}/>
                <img src={G3} alt="image" className={styles.galleryimage}/>
                <img src={G4} alt="image" className={styles.galleryimage}/>
                <img src={G5} alt="image" className={styles.galleryimage}/>
                <img src={G6} alt="image" className={styles.galleryimage}/>
                <img src={G7} alt="image" className={styles.galleryimage}/>
                <img src={G8} alt="image" className={styles.galleryimage}/>
                <img src={G9} alt="image" className={styles.galleryimage}/>
                <img src={G10} alt="image" className={styles.galleryimage}/>
                <img src={G11} alt="image" className={styles.galleryimage}/>
                <img src={G12} alt="image" className={styles.galleryimage}/>
                <img src={G13} alt="image" className={styles.galleryimage}/>
                <img src={G14} alt="image" className={styles.galleryimage}/>
                <img src={G15} alt="image" className={styles.galleryimage}/>
                <img src={G16} alt="image" className={styles.galleryimage}/>
                <img src={G17} alt="image" className={styles.galleryimage}/>
                <img src={G18} alt="image" className={styles.galleryimage}/>
                

          
        </div>



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


export default Gallery;