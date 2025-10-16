import Nav from 'react-bootstrap/Nav';
import styles from './Home.module.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './assets/carousel1.jpg'
import img2 from './assets/carousel2.jpg'
import img3 from './assets/carousel3.jpg'
import cardimg1 from './assets/Hcardimage1.jpg'
import cardimg2 from './assets/Hcardimage2.jpg'
import cardimg3 from './assets/Hcardimage3.jpg'
import cardimg4 from './assets/Hcardimage4.jpg'
import cardimg5 from './assets/Hcardimage5.jpg'
import cardimg6 from './assets/Hcardimage6.jpg'
import galleryimg1 from './assets/galleryimg1.jpg'
import galleryimg2 from './assets/galleryimg2.jpg'
import galleryimg3 from './assets/galleryimg3.jpg'
import galleryimg4 from './assets/galleryimg4.jpg'
import galleryimg5 from './assets/galleryimg5.jpg'
import galleryimg6 from './assets/galleryimg6.jpg'
import aboutimg1 from './assets/Haboutimage1.jpg'
import Hdeliveryimg from './assets/Hdeliveryimg.jpg'
import deliverypartnerimg1 from './assets/Hdeliverypartnerimg1.png'
import deliverypartnerimg2 from './assets/Hdeliverypartnerimg2.webp'
import deliverypartnerimg3 from './assets/Hdeliverypartnerimg3.png'
import { FaFacebook, FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom";



function Home() {
  return (
    <>

  {/** Carousel */}
    <Carousel>
      <Carousel.Item>
        <img src={img1} alt="" style={{height:"600px", width:"100%"}}/>
        <Carousel.Caption>
          <div >
          <h3 className={styles.carouselcontent1}>Welcome to the <h1 style={{color:"red",fontSize:"80px"}}>Eat Burger</h1> Shop</h3>
          </div>
        <Link as={Link} to='/menu'><button  className={styles.carouselbutton}><b>VIEW MENU</b></button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
         <img src={img2} alt="" style={{height:"600px", width:"100%"}}/>
        <Carousel.Caption>
          <h3 className={styles.carouselcontent2}>Eat Burger Burgers are better than the best</h3>
            <Link as={Link} to='/menu'><button  className={styles.carouselbutton}><b>VIEW MENU</b></button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={img3} alt="" style={{height:"600px", width:"100%"}}/>
        <Carousel.Caption>
          <h3 className={styles.carouselcontent3}>Hungry? You are at the right place</h3>
            <Link as={Link} to='/menu'><button  className={styles.carouselbutton}><b>VIEW MENU</b></button></Link>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


      {/** Our Menu*/}
<div  className={styles.menu}>
        <h2>Burger Shop Specials🍔</h2>
  </div>
  <div className={styles.cardcontainer}>
   <Link as={Link} to='/menu'>  
    <div className={styles.card}>
      <div>
       <img src={cardimg1} alt="" className={styles.cardimage}/>
       </div>
       <div className={styles.cardcontent}>
        <h1>Burger🍔</h1>
        <p>Juicy, fresh, and flavorful burgers made to satisfy every craving.</p>
       </div>
    </div>
    </Link>

   <Link as={Link} to='/menu'>  
     <div className={styles.card}>
    <div><img src={cardimg2} alt="" className={styles.cardimage}/>
    </div>
       <div className={styles.cardcontent}>
        <h1>Sides🍟</h1>
        <p>Crispy golden fries, onion rings, and cheesy bites to pair with your meal.</p>
       </div>
    </div>
    </Link>

   <Link as={Link} to='/menu'>  
     <div className={styles.card}>  
      <div><img src={cardimg3} alt="" className={styles.cardimage}/></div>
       <div className={styles.cardcontent}>
        <h1>Beverages🥤</h1>
        <p>Refreshing soft drinks, creamy shakes, and cool beverages.</p>
       </div>
    </div>
    </Link>


   <Link as={Link} to='/menu'>  
     <div className={styles.card}>
  <div><img src={cardimg4} alt="" className={styles.cardimage}/>
  </div>
       <div className={styles.cardcontent2}>
      <h1>Combos🍴</h1>
      <p>Tasty burger, fries, and drink combos at great value.</p>
       </div>
    </div>
    </Link>


   <Link as={Link} to='/menu'>  
     <div className={styles.card}>
        <div><img src={cardimg5} alt="" className={styles.cardimage}/>
        </div>
       <div className={styles.cardcontent2}>
      <h1>Desserts🍦</h1>
      <p>Sweet treats like sundaes, brownies, and choco lava cake to end your meal perfectly.</p>
       </div>
    </div>
    </Link>


   <Link as={Link} to='/menu'>  
     <div className={styles.card}>
        <img src={cardimg6} alt="" className={styles.cardimage}/>
       <div className={styles.cardcontent2}>
      <h1>Specials 👨‍🍳</h1>
      <p>Unique and limited-time creations crafted by our chef for extra delight.</p>
       </div>
    </div>
    </Link>
  </div>


   {/*Gallery*/}
   <div  className={styles.menu}>
        <h2>Gallery📸</h2>
  </div>

  <div className={styles.gallery}>
    <img src={galleryimg1} className={styles.galleryimg} alt="Gallery image 1" />
     <img src={galleryimg2} className={styles.galleryimg} alt="Gallery image 2" />
      <img src={galleryimg3} className={styles.galleryimg} alt="Gallery image 3" />
       <img src={galleryimg4} className={styles.galleryimg} alt="Gallery image 4" />
        <img src={galleryimg5} className={styles.galleryimg} alt="Gallery image 1" />
         <img src={galleryimg6} className={styles.galleryimg} alt="Gallery image 1" />
  </div>

<div>
 <Link style={{textDecoration:"none"}} as={Link} to='/gallery'><button  className={styles.gallerybtn} ><h2>View More</h2></button></Link>
</div>
<hr/>

{/*Home About*/}

<div className={styles.about}>
  <img className={styles.aboutimage} src={aboutimg1} alt="Image" />
  <div style={{marginRight:"40px"}}>
  <h4 style={{fontStyle:"italic", fontSize:"40px", fontWeight:"lighter", fontFamily:"fantasy"}}>Savor the Flavor</h4><h2 style={{fontSize:"60px", color:"red"}}>Welcome to The Burger Shop Eat Burger🍔
</h2><h5 style={{fontSize:"23px", fontWeight:"lighter"}}>Welcome to Ear Burger, where flavor speaks louder than words.
We believe every bite should be music to your taste buds.
Our burgers are crafted with the freshest, finest ingredients.
From classic veggie delights to juicy chicken and cheesy specials, we’ve got it all.
Crispy fries, golden nuggets, and sides that complete your meal.
Refreshing drinks and creamy shakes to keep you cool and happy.
At Ear Burger, every meal is tuned to perfection.
We serve not just food, but an experience full of joy.
Come with friends or family, and share the love of great taste.
Ear Burger — where every bite is a melody of flavors. 🎶🍔</h5>
<Link as={Link} to='/menu'><button  className={styles.aboutbutton}><b>VIEW MENU</b></button></Link>
</div>
</div>



{/*Delivery*/}

<div className={styles.deliverycontainer}>
<div  className={styles.deliveryimg}>
</div>
<div className={styles.deviverycontent}>
    <h4 style={{fontStyle:"italic",fontWeight:"bold", fontFamily:"cursive", color:"white"}}>Get the Burger Shop straight to your door!</h4><h2 style={{fontSize:"40px", fontFamily:"fantasy", color:"red"}}>DELIVERY SERVICE</h2><h5 style={{fontSize:"37px", color:"yellow"}}>Craving The Burger Shop? Now you can order your favorites through Swiggy, Zomato and Uber Eats!</h5>
  </div>
  

</div>



  <div className={styles.deliverypartnerimgcontainer} >
   <a href="https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2"> <img className={styles.deliverypartnerimg} src={deliverypartnerimg1}  alt="image1" /></a>
      <a href="https://www.zomato.com/chhindwara/delivery/dish-burger"> <img className={styles.deliverypartnerimg} src={deliverypartnerimg2} alt="image1" /></a>
       <a href='https://www.ubereats.com/near-me/burger?msockid=2d9aa5c3d4e862592f37b085d5b9635a'>  <img className={styles.deliverypartnerimg} src={deliverypartnerimg3} alt="image1" /></a>
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
         <Nav.Link href="#home" ><b>Home</b></Nav.Link> 
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
  );
}

export default Home;