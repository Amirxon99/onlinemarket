import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./products.module.css";
import { FadeLoader } from "react-spinners";

function Products() {
  const [mahsulotlar, setMahsulotlar] = useState(null);
  async function getProducts() {
    const res = await fetch(
      "https://685f7d77c55df675589e6c35.mockapi.io/products"
    );
    const data = await res.json();
    setMahsulotlar(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Header></Header>
      
      <div className={styles.main}>
        <div className="container">
          <div className={styles.main_top}>
            <select name="" id="">
              <option value="All">Barcha mahsulotlar</option>
              <option value="phone">Telefonlar</option>
              <option value="accessory">Aksessuarlar</option>
            </select>
            <input type="text" placeholder="Qidirish ..." />
          </div>

          <div className={styles.products_box}>
            {!mahsulotlar && 
             <div className={styles.loader}>
                 <FadeLoader
                color="white"
                size={550}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
             </div>

            }
            {mahsulotlar &&
              mahsulotlar.map((m, i) => {
                return <Card key={i} mahsulot={m} />;
              })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Products;
