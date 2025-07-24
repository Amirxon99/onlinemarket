import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./home.module.css";
import { FadeLoader } from "react-spinners";
function Home() {
  
   const [mahsulotlar,setMahsulotlar]=useState(null);
   async function getProducts() {
     const res=await fetch("https://685f7d77c55df675589e6c35.mockapi.io/products");
     const data=await res.json();
     setMahsulotlar(data);
     
    }
    useEffect(()=>{
      getProducts();
    },[])
    
    console.log(mahsulotlar);


  return (
    <div>
      <Header></Header>
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.hero_text}>
              <h1>Eng yangi telefonlar va aksessuarlar</h1>
              <p>
                Yuqori sifatli mahsulotlar, qulay narxlar va tez yetkazib berish
              </p>
              <button className={styles.hero_btn}>
                Xarid qilishni boshlang <i class="fa-solid fa-right-long"></i>
              </button>
            </div>
            <div className={styles.hero_img}>
              <img src="./heroImg.png" alt="sd" />
            </div>
          </div>
        </section>
        <section className={styles.products}>
         <div className={styles.container}>
            <h2 className={styles.title}>Mahsulotlar</h2>
            <div className={styles.products_box}>
               {!mahsulotlar && 
                           <div className={styles.loader}>
                               <FadeLoader
                              color="blue"
                              size={550}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                              />
                           </div>
              
                          }
              {mahsulotlar&& mahsulotlar.map((m,i)=>{
                return  <Card key={i} mahsulot={m}/>
              })}
           

            </div>
         </div>
        </section>
        <section className={styles.services}>
         <div className={styles.container}>
            <h2 className={styles.title}>Bizning Xizmatlar</h2>
            <div className={styles.services_box}>
                <div className={styles.service}>
                     <div className={styles.service_icon}>
                           <i className="fa-solid fa-cart-shopping"></i>
                     </div>
                     <h3>Bepul yetkazib berish</h3>
                     <p>$50 dan ortiq xaridlarga bepul yetkazib berish</p>
                </div>
                <div className={styles.service}>
                     <div className={styles.service_icon}>
                          <i className="fa-solid fa-star"></i>
                     </div>
                     <h3>Sifat kafolati</h3>
                     <p>Barcha mahsulotlarga 1 yillik kafolat</p>
                </div>
                <div className={styles.service}>
                     <div className={styles.service_icon}>
                          <i className="fa-solid fa-heart"></i>
                     </div>
                     <h3>24/7 qo'llab-quvvatlash</h3>
                     <p>Har doim sizning xizmatingizdamiz</p>
                </div>
            </div>
         </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Home;
