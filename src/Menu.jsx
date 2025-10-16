import MenuCard from "./MenuCard";
import styles from './Menu.module.css'
import m1 from './assets/MB1.jpg'
import m2 from './assets/MB2.jpg'
import m3 from './assets/MB3.jpg'
import m4 from './assets/MB4.jpg'
import m5 from './assets/MB5.jpg'
import m6 from './assets/MB6.jpg'
import m7 from './assets/MB7.jpg'
import m8 from './assets/MB8.jpg'
import m9 from './assets/MB9.jpg'
import m10 from './assets/MB10.jpg'
import m11 from './assets/MB11.jpg'
import m12 from './assets/MB12.jpg'
import m13 from './assets/MS1.jpg'
import m14 from './assets/MS2.jpg'
import m15 from './assets/MS3.jpg'
import m16 from './assets/MS4.jpg'
import m17 from './assets/MD1.jpg'
import m18 from './assets/MD2.jpg'
import m19 from './assets/MD3.jpg'
import m20 from './assets/MD4.jpg'
import m21 from './assets/MC1.jpg'
import m22 from './assets/MC2.jpg'
import m23 from './assets/MC3.jpg'
import m24 from './assets/MDE1.jpg'
import m25 from './assets/MDE2.jpg'
import m26 from './assets/MDE3.jpg'
import m27 from './assets/MSC1.jpg'
import m28 from './assets/MSC2.jpg'
import m29 from './assets/MSC3.jpg'
import { useState } from "react";
import Nav from 'react-bootstrap/Nav';

import { FaFacebook, FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom"

function Menu(){
  const burgerItems = [
    {
      id: 1,
      image: m1,
      name: "Classic Veg Burger",
      description: "Fresh veggie patty with lettuce, tomato, and mayo",
      price: 99
    },

      {
      id: 2,
      image: m2,
      name: "Cheese Burger",
      description: "Juicy patty topped with melted cheese burger",
      price: 129
    },

       {
      id: 3,
      image: m3,
      name: "Chicken Burger",
      description: "Crispy chicken patty with mayo & lettuce",
      price: 149
    },

      {
      id: 4,
      image: m4,
      name: "Double Patty Burger",
      description: "Two patties stacked with extra cheese",
      price: 199
    },

      {   
         id: 5,
      image: m5,
      name: "Spicy Peri-Peri Burger",
      description: "Tangy & fiery peri-peri spiced patty",
      price: 159
    },

      {
      id: 6,
      image: m6,
      name: "BBQ Burger",
      description: "Grilled patty with smoky BBQ sauce",
      price: 179
    },

       {
      id: 7,
      image: m7,
      name: "Paneer Tikka Burger",
      description: "Indian twist with spicy paneer tikka",
      price: 169
    },

      {
      id: 8,
      image: m8,
      name: "Egg & Cheese Burger",
      description: "Fluffy omelet with creamy cheese",
      price: 139
    },
{

      id: 9,
      image: m9,
      name: "Mushroom Burger",
      description: "Juicy mushrooms with melted cheese",
      price: 159
    },

      {
      id: 10,
      image: m10,
      name: "Fish Burger",
      description: "Crispy fish fillet with tartar sauce",
      price: 179
    },

       {
      id: 11,
      image: m11,
      name: "Bacon & Cheese Burger",
      description: "Loaded with crispy bacon & cheese (non-veg special)",
      price: 199
    },

      {
      id: 12,
      image: m12,
      name: "Eat Burger Special",
      description: "Your shop’s unique secret recipe burger ⭐",
      price: 229
    }
  ];

  const sidesitems=[
    {
      id:13,
      image:m13,
      name:"French Fries",
      description:"Golden crispy fries (Classic / Peri-Peri / Cheesy).",
      price:119

    },

    {
      id:14,
      image:m14,
      name:"Onion Rings",
      description:"Crunchy, golden-brown onion rings",
      price:99

    },

     {
      id:15,
      image:m15,
      name:"Nuggets",
      description:"Crispy bite-sized chicken/veg nuggets.",
      price:129

    },

     {
      id:16,
      image:m16,
      name:"Garlic Bread",
      description:"Toasted bread with garlic butter and herbs.",
      price:89

    }
  ]


  const drinksitems=[
  {
    id:17,
    image:m17,
    name:"Soft Drinks",
    description:"Coke, Sprite, Pepsi (Chilled & Refreshing).",
    price:49
  },

   {
    id:18,
    image:m18,
    name:"Milkshakes",
    description:"Chocolate, Strawberry, Vanilla.",
    price:119
  },

   {
    id:19,
    image:m19,
    name:"Cold Coffee",
    description:"Smooth, chilled coffee with ice cream topping.",
    price:139
  },

   {
    id:20,
    image:m20,
    name:"Fresh Juices",
    description:"Seasonal fruit juices served fresh.",
    price:99
  }

  ]


  const comboitems=[
    {
      id:21,
      image:m21,
      name:"Burger + Fries + Drink",
      description:"Perfect value meal combo.",
      price:199
    },

       {
      id:22,
      image:m22,
      name:"Double Burger + Fries",
      description:"Fries – Big hunger, bigger combo.",
      price:249
    },

       {
      id:23,
      image:m23,
      name:"Family Combo + Extra",
      description:"2 Burgers + Fries + 2 Drinks.",
      price:399
    }
  ]


  
  const dessertitems=[
    {
      id:24,
      image:m24,
      name:"Ice Cream Sundae",
      description:"Creamy ice cream topped with chocolate syrup.",
      price:129
    },

       {
      id:25,
      image:m25,
      name:"Brownie with Ice Cream",
      description:"Warm brownie served with vanilla scoop.",
      price:159
    },

       {
      id:26,
      image:m26,
      name:"Choco Lava Cake",
      description:"Gooey chocolate cake with molten center.",
      price:149
    }
  ]

  
  const specialsitems=[
    {
      id:27,
      image:m27,
      name:"Today’s Special Burger",
      description:"Chef’s unique recipe of the day.",
      price:179
    },

       {
      id:28,
      image:m28,
      name:"Seasonal Burger",
      description:"Eg: Paneer Tikka / BBQ Chicken Burger.",
      price:189
    },

       {
      id:29,
      image:m29,
      name:"Limited Edition Combo",
      description:"Exclusive meal deal available for a short time.",
      price:249
    }
  ]







  
  
  const [burgermenu, setBurgermenu] = useState(burgerItems);
  const [sidesmenu, setSidesmenu]=useState(sidesitems)
  const [drinksmenu,setDrinksmenu]=useState(drinksitems)
  const [combomenu,setCombomenu]=useState(comboitems)
  const [dessertmenu,setDessertmenu]=useState(dessertitems)
  const [specialsmenu,setSpecialsmenu]=useState(specialsitems)




   const sides= () =>{
    setBurgermenu([])
    setSidesmenu(sidesitems)
    setDrinksmenu([])
    setCombomenu([])
    setDessertmenu([])
    setSpecialsmenu([])
  }


   const drinks= () =>{
    setBurgermenu([])
    setSidesmenu([])
    setDrinksmenu(drinksitems)
    setCombomenu([])
    setDessertmenu([])
    setSpecialsmenu([])
  }


   const combo= () =>{
    setBurgermenu([])
    setSidesmenu([])
    setDrinksmenu([])
    setCombomenu(comboitems)
    setDessertmenu([])
    setSpecialsmenu([])
  }


   const dessert= () =>{
    setBurgermenu([])
    setSidesmenu([])
    setDrinksmenu([])
    setCombomenu([])
    setDessertmenu(dessertitems)
    setSpecialsmenu([])
  }


   const special= () =>{
    setBurgermenu([])
    setSidesmenu([])
    setDrinksmenu([])
    setCombomenu([])
    setDessertmenu([])
    setSpecialsmenu(specialsitems)
  }


   const burger= () =>{
    setBurgermenu(burgerItems)
    setSidesmenu([])
    setDrinksmenu([])
    setCombomenu([])
    setDessertmenu([])
    setSpecialsmenu([])
  }


  const [bgColor, setBgColor] = useState("");


 

  

 
 

  return (
    <>


{/*Gallery image*/}
    <div  className={styles.galleryimg}>
      <h2  className={styles.gallerycontent}>Menu</h2>
    </div>


    {/*Menu buttons*/}
 <div className={styles.menubtncontainer}>
    
      <button
        onClick={burger}
        onFocus={() => setBgColor("burger")}
        onBlur={() => setBgColor("")}
        style={{
          backgroundColor: bgColor === "burger" ? "black" : "",
        }}
        className={styles.menubutton}
      >
        Burger🍔 <br /> <p style={{fontSize:"22px"}}>➡️Click Here</p>
      </button>

      <button
        onClick={sides}
        onFocus={() => setBgColor("sides")}
        onBlur={() => setBgColor("")}
        style={{
          backgroundColor: bgColor === "sides" ? "black" : "",
        }}
        className={styles.menubutton}
      >
        Sides🍟 <br /> <p style={{fontSize:"22px"}}>➡️Click Here</p>
      </button>

      <button
        onClick={drinks}
        onFocus={() => setBgColor("drinks")}
        onBlur={() => setBgColor("")}
        style={{
          backgroundColor: bgColor === "drinks" ? "black" : "",
        }}
        className={styles.menubutton}
      >
        Drinks & Beverages🥤 <br /> <p style={{fontSize:"22px"}}>➡️Click Here</p>
      </button>

      <button
        onClick={combo}
        onFocus={() => setBgColor("combo")}
        onBlur={() => setBgColor("")}
        style={{
          backgroundColor: bgColor === "combo" ? "black" : "",
        }}
        className={styles.menubutton}
      >
        Combos🍴 <br /> <p style={{fontSize:"22px"}}>➡️Click Here</p>
      </button>

      <button
        onClick={dessert}
        onFocus={() => setBgColor("dessert")}
        onBlur={() => setBgColor("")}
        style={{
          backgroundColor: bgColor === "dessert" ? "black" : "",
        }}
        className={styles.menubutton}
      >
        Desserts🍦 <br /> <p style={{fontSize:"22px"}}>➡️Click Here</p>
      </button>

      <button
        onClick={special}
        onFocus={() => setBgColor("special")}
        onBlur={() => setBgColor("")}
        style={{
          backgroundColor: bgColor === "special" ? "black" : "",
        }}
        className={styles.menubutton}
      >
        Specials👨‍🍳 <br /> <p style={{fontSize:"22px"}}>➡️Click Here</p>
      </button>
    </div>

{/*Burger Menu*/}
   
     
<div className={styles.card}>
    
  

      {burgermenu.map((item) => (
        <MenuCard  key={item.id} card={item}
        />))}
        </div>

 {/*Sides Menu*/}       
  

    <div className={styles.card}>

      {sidesmenu.map((item) => (
        <MenuCard key={item.id} card={item}  />
      ))}

    </div>

{/*Drinks Menu*/}
      

        <div  className={styles.card}>
          {drinksmenu.map((item) => (
            <MenuCard key={item.id} card={item}  />
          ))}
        </div>

{/*Combos Menu*/}
       

          <div  className={styles.card}>
            {combomenu.map((item)  => (
              <MenuCard key={item.id} card={item} />
            ))}
          </div>


{/*Desserts Menu*/}
       

          <div className={styles.card}>
            {dessertmenu.map((item) => (

              <MenuCard key={item.id} card={item} />
            ))}
          </div>


{/*Specials Menu*/}
            

            <div className={styles.card}>
            {specialsmenu.map((item) => (

              <MenuCard key={item.id} card={item} />
            ))}
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

export default Menu;
