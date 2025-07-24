import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={styles.logo}>TechShop</h2>
          <p>Eng yangi telefonlar va aksessuarlar uchun ishonchli do'kon</p>
        </div>

        <div className={styles.column}>
          <h3>Kategoriyalar</h3>
          <ul>
            <li>Telefonlar</li>
            <li>Aksessuarlar</li>
            <li>Quloqchinlar</li>
            <li>Zaryadlovchilar</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Kompaniya</h3>
          <ul>
            <li>Biz haqimizda</li>
            <li>Aloqa</li>
            <li>Yetkazib berish</li>
            <li>Qaytarish</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Aloqa</h3>
          <ul>
            <li>+998 90 123 45 67</li>
            <li>info@techshop.uz</li>
            <li>Toshkent, O'zbekiston</li>
          </ul>
        </div>
      </div>

      <hr className={styles.divider} />
      <p className={styles.copy}>&copy; 2025 TechShop. Barcha huquqlar himoyalangan.</p>
    </footer>
  );
};

export default Footer;
