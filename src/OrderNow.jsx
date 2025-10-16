import styles from './OrderNow.module.css';
import { useState, useRef } from 'react';
import {Link} from "react-router-dom"



import Nav from 'react-bootstrap/Nav';
import { FaFacebook, FaInstagram} from "react-icons/fa";
import { FaLocationPin, FaMapLocation, FaMapLocationDot, FaTimeline } from 'react-icons/fa6';

function OrderNow() {
 const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    dropLocation: "",
    burgers: [],
    sides: [],
    beverages: [],
    combos: [],
    desserts: [],
    daySpecial: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const arr = [...formData[name]];
      if (checked) {
        arr.push(value);
      } else {
        const index = arr.indexOf(value);
        if (index > -1) arr.splice(index, 1);
      }
      setFormData({ ...formData, [name]: arr });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.dropLocation) {
      alert("⚠️ Please fill all required fields!");
      return;
    }

    if (
      formData.burgers.length === 0 &&
      formData.sides.length === 0 &&
      formData.beverages.length === 0 &&
      formData.combos.length === 0 &&
      formData.desserts.length === 0 &&
      formData.daySpecial.length === 0
    ) {
      alert("⚠️ Please select at least one item to order.");
      return;
    }

    alert("✅ Order placed successfully!");

    // Reset form
    setFormData({
      name: "",
      mobile: "",
      dropLocation: "",
      burgers: [],
      sides: [],
      beverages: [],
      combos: [],
      desserts: [],
      daySpecial: [],
    });
    e.target.reset();
  };

  const menu = {
    burgers: [
      "Classic Veg Burger (₹99)",
      "Cheese Burger (₹129)",
      "Chicken Burger (₹149)",
      "Double Patty Burger (₹199)",
      "Spicy Peri-Peri Burger (₹159)",
      "BBQ Burger (₹179)",
      "Paneer Tikka Burger (₹169)",
      "Egg & Cheese Burger (₹139)",
      "Mushroom & Cheese Burger (₹159)",
      "Fish Burger (₹179)",
      "Bacon & Cheese Burger (₹199)",
      "Eat Burger Special (Signature) (₹229)",
    ],
    sides: [
      "Fries (₹119)",
      "Onion Rings (₹99)",
      "Nuggets (₹129)",
      "Garlic Bread (₹89)",
    ],
    beverages: [
      "Soft Drinks (₹49)",
      "Milkshake (₹119)",
      "Cold Coffee (₹139)",
      "Fresh Juice (₹99)",
    ],
    combos: [
      "Burger + Fries + Drink (₹199)",
      "Double Burger + Fries (₹249)",
      "Family Combo + Extra (₹399)",
    ],
    desserts: [
      "Ice Cream Sundae (₹129)",
      "Brownie with Ice Cream (₹159)",
      "Choco Lava Cake (₹149)",
    ],
    daySpecial: [
      "Today’s Special Burger (₹179)",
      "Seasonal Burger (₹189)",
      "Limited Edition Combo (₹249)",
    ],
  };
  return (
<>
    
 
{/* Order form*/}


<div className={styles.formbackground}>
      <div className={styles.orderContainer}>
        <h2>🍔 Order Now</h2>
        <form onSubmit={handleSubmit} className={styles.orderForm}>
          {/* Customer Info */}
          <div className={styles.section}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.section}>
            <label>Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="10-digit number"
            />
          </div>

          <div className={styles.section}>
            <label>Drop Location</label>
            <textarea
              name="dropLocation"
              value={formData.dropLocation}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          {/* Dynamic Menu Items */}
          {Object.keys(menu).map((category) => (
            <div key={category} className={styles.section}>
              <label>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
              <div className={styles.itemsGrid}>
                {menu[category].map((item, idx) => (
                  <div key={idx} className={styles.itemRow}>
                    <label>
                      <input
                        type="checkbox"
                        name={category}
                        value={item}
                        onChange={handleChange}
                      />{" "}
                      {item}
                    </label>
                    <input
                      type="number"
                      name={`${category}Qty_${idx}`}
                      min="1"
                      max="10"
                      placeholder="Qty"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button type="submit" className={styles.submitBtn}>
            Place Order
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
  );
}




export default OrderNow;
