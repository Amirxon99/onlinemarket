import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import styles from './About.module.css';
import { FaPhone, FaEnvelope, FaTelegramPlane, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <Header></Header>
 <div className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>Biz haqimizda</h1>
        <p className={styles.description}>
          TechShop — bu eng yangi telefonlar va zamonaviy aksessuarlarni arzon va ishonchli tarzda taqdim etuvchi raqamli do'kon.
          Mijozlarimizga tez yetkazib berish va a'lo xizmat ko‘rsatish — bizning ustuvor vazifamizdir.
        </p>

        <h2 className={styles.subtitle}>Nega aynan biz?</h2>
        <ul className={styles.list}>
          <li>📱 Eng yangi va trenddagi mahsulotlar</li>
          <li>⚡ Tez yetkazib berish</li>
          <li>💬 24/7 mijozlarga xizmat</li>
          <li>🎁 Maxsus chegirmalar va sovg‘alar</li>
        </ul>

        <h2 className={styles.subtitle}>Aloqa</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <p>Toshkent, Amir Temur ko'chasi, 21A</p>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <p>Samarqand, Registon maydoni, 5</p>
          </div>
          <div className={styles.contactItem}>
            <FaPhone className={styles.icon} />
            <p>+998 90 123 45 67</p>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <p>info@techshop.uz</p>
          </div>
          <div className={styles.contactItem}>
            <FaTelegramPlane className={styles.icon} />
            <a href="https://t.me/techshopuz" target="_blank" rel="noreferrer">@techshopuz</a>
          </div>
        </div>

        <h2 className={styles.subtitle}>Bizning Lokatsiyalar</h2>
        <div className={styles.maps}>
          <iframe
            title="Toshkent Filiali"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.522045188993!2d69.28602411541235!3d41.31115197927232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b329ec4f05d%3A0x7e5d7adf60e3f0c4!2sAmir%20Temur%20ko&#39;chasi%2021A!5e0!3m2!1sen!2s!4v1712000000000"
            loading="lazy"
            className={styles.map}
          ></iframe>

          <iframe
            title="Samarqand Filiali"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.000000000000!2d66.974000000000!3d39.654000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4cbed0a6c150ad%3A0x4d00000000000000!2sRegiston%20maydoni!5e0!3m2!1sen!2s!4v1712000000000"
            loading="lazy"
            className={styles.map}
          ></iframe>
        </div>
      </div>
    </div>
      <Footer></Footer>
    </div>
   
  );
};

export default About;
