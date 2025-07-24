import { Link } from 'react-router-dom';
import styles from './card.module.css'

function Card(props) {
  console.log(props);
  let oldPrice=Math.floor(props.mahsulot.price/(1-(props.mahsulot.sale/100)));
  return (
    <div className={styles.card}>
          <img src={props.mahsulot.images[0]} alt="dsa" />
          <h2>{props.mahsulot.name} </h2>
           <h3>$ {props.mahsulot.price} <span>${oldPrice}</span></h3>
           <Link to={`/products/${props.mahsulot.id}`}> <button>Mahsulotni ko'rish</button></Link>
          
           <span className={styles.sale}>-{props.mahsulot.sale}%</span>
    </div>
  )
}

export default Card