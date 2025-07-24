import React, { useEffect, useRef, useState } from "react";
import styles from "./carousel.module.css";

const Carousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (images.length === 0) return;

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => resetTimeout();
  }, [currentIndex, images]);

  if (images.length === 0) {
    return <div className={styles.slider}>No images to show.</div>;
  }

  return (
    <div className={styles.slider}>
      <div
        className={styles.sliderTrack}
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} className={styles.slide} />
        ))}
      </div>
      <div className={styles.dots}>
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`${styles.dot} ${currentIndex === idx ? styles.active : ""}`}
            onClick={() => setCurrentIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
