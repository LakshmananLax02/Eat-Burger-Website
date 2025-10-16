import styles from './Contact.module.css'
import { FaGlobe, FaGofore, FaHome,FaHourglass,FaInbox,FaMailBulk,FaPhone} from 'react-icons/fa';
import { useState } from "react";
import { useRef } from "react";
import Nav from 'react-bootstrap/Nav';
import { FaFacebook, FaInstagram} from "react-icons/fa";
import { FaLocationPin, FaMapLocation, FaMapLocationDot, FaTimeline } from 'react-icons/fa6';
import {Link} from "react-router-dom"



function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (!formData.firstName || !formData.lastName || !formData.mobile || !formData.email || !formData.message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ firstName: "", lastName: "", mobile: "", email: "", message: "" }); // reset form
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message. Try again!");
    }
  };

    return(
<>


         {/*Contact us image*/}
    <div  className={styles.galleryimg}>
       <h2  className={styles.gallerycontent}>Contact Us</h2>
     </div>


     <h2 className={styles.getcontent}>📞 Get in Touch</h2>

     <p className={styles.para}>We’d love to hear from you! Whether you’re craving your favorite burger, planning a party order, or just want to say hi — we’re here.</p>


 <div className={styles.contactcontainer}>
     <div className={styles.contanctcard}>
         <div>
       <FaLocationPin className={styles.contacticon}>Location</FaLocationPin>
       <div className={styles.contactcontent}>
             <h3>🏠 Visit Us</h3>
             <p>Eat Burger, No.6,
 6th Street, Crosscut road, Coimbatore – 641 012.</p>
 </div>
         </div>
     </div>

      <div  className={styles.contanctcard}>
         <div>
                 <FaPhone className={styles.contacticon}>call</FaPhone>
                 <div className={styles.contactcontent}>
                <h3>📱 Call / WhatsApp</h3>
             <p>+91 98765 43210</p>
             </div>
         </div>
     </div>

      <div  className={styles.contanctcard}>
         <div>
             <FaMailBulk className={styles.contacticon}>Email</FaMailBulk>
             <div className={styles.contactcontent}>
              <h3>📧 Email Us</h3>
             <p>eatburger06@gmail.com</p>
             </div>
         </div>
     </div>

      <div  className={styles.contanctcard}>
         <div>
          <FaHourglass className={styles.contacticon}></FaHourglass>
          <div className={styles.contactcontent}> 
              <h3>🕒 Opening Hours</h3>
             <p>Monday – Sunday: 10:00 AM – 11:00 PM</p>
             </div>
         </div>
     </div>

    
      <div  className={styles.contanctcard}>
         <div>
             <FaGlobe className={styles.contacticon}></FaGlobe>
             <div className={styles.contactcontent}>
              <h3>🌐 Follow Us</h3>
             <p>Facebook | Instagram
             </p>
             </div>
         </div>
     </div>
 </div>





 {/* Form */}
     <div >
      <div
        className={styles.form}
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          padding: "20px",
          borderRadius: "10px",
          background: "rgba(255,255,255,0.9)",
          backgroundColor:"orange"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
              placeholder="10-digit number"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc"
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc"
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>

{/*  Footer*/}
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
          <Nav.Link as={Link} to='/home'><b>Home</b></Nav.Link> 
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


export default Contact;
