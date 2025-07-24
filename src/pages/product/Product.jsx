import styles from "./product.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "../../components/carousel/Carousel";
function Product() {
  const { id } = useParams();
  const [mahsulot, setMahsulot] = useState();
  let [order, setOrder] = useState({
    product: mahsulot,
    clientName: "",
    clientNumber: "",
    clientAddress: "",
    status: false,
    date: "",
  });
  let [showModal, setShowModal] = useState(false);
  async function getProducts() {
    const res = await fetch(
      "https://685f7d77c55df675589e6c35.mockapi.io/products/" + id
    );
    const data = await res.json();
    setMahsulot(data);
  }
  useEffect(() => {
    getProducts();
  }, []);
  console.log(mahsulot);
  async function addOrder() {}
  
  function handle(e){
    const {name,value}=e.target;
    setOrder((prevOrder)=>({...prevOrder,[name]:value}));
  }

  return (
    <div>
      <Header></Header>
      <main
        className="container"
        style={{ filter: showModal == false ? "blur(0px)" : "blur(20px)" }}
      >
        <button className={styles.back_btn}>
          <Link to="/products">Back</Link>
        </button>
        <h1>Mahsulot</h1>
        {mahsulot && (
          <div className={styles.box}>
            <div className={styles.product_img}>
              <Carousel images={mahsulot.images}></Carousel>
            </div>
            <div className={styles.product_text}>
              <h2>{mahsulot.name}</h2>
              <h3>{mahsulot.category}</h3>
              <p>{mahsulot.desc}</p>
              <h3>Narxi: {mahsulot.price}</h3>
              <button onClick={() => setShowModal(true)}>Sotib olish</button>
            </div>
          </div>
        )}
      </main>
      {showModal && (
        <div className={styles.modal}>
          <h2>{mahsulot.name}</h2>
          <h3>Narxi: {mahsulot.price}</h3>
          <input
            name="clientName"
            value={order.clientName}
            onChange={handle}
            type="text"
            placeholder="Ismingizni kiriting"
            required
          />{" "}
          <br />
          <input
            name="clientNumber"
            value={order.clientNumber}
            onChange={handle}
            type="number"
            placeholder="Telefon raqamingizni kiriting..."
            required
          />
          <br />
          <textarea
            value={order.clientAddress}
            onChange={handle}
            name="clientAddress"
            placeholder="Manzilni kiriting.."
          ></textarea>
          <br />
          <button onClick={() => setShowModal(false)}>Rad etish</button>
          <button>Buyurtma berish</button>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}

export default Product;
