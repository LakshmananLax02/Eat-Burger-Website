import styles from './Menucard.module.css'
import {Link} from "react-router-dom"
function MenuCard({ card }) {
  return (
    <>
      
   <div className={styles.cardcontainer}>
    <div className={styles.card}>
      <img src={card.image} loading="lazy" alt={card.name} className={styles.image} />
      <div className={styles.content}>
        <h3>{card.name}</h3>
        <p className={styles.desc}>{card.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>₹{card.price}</span>
          <div className={styles.buttons}>
           <Link as={Link} to='/order' > <button  className={styles.buyBtn}>⚡ Order Now</button></Link>
           
          </div>
        </div>
      </div>
    </div>
  </div>

  </>
  );
}



export default MenuCard;
