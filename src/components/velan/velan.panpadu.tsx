import React, { useEffect, useRef, useState } from "react";
import styles from "./velan.module.css";
import Assets from "imports/asset.import";

const VelanPanpaadu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      // Check if the container is in the viewport
      if (rect.top <= 0 && rect.bottom > window.innerHeight / 2) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.velan_panpaadu} ${isActive ? styles.active : ""}`}
    >
      {/* Sticky Image */}
      <img
        src={Assets.velan_img}
        alt="velan image"
        className={styles.velan_image}
      />

      {/* Slide Images in Column with Text Below */}
      <div className={styles.slideContainer}>
        <div className={styles.slideItem}>
          <img
            src={Assets.velan_sli1}
            alt="velan slide 1"
            className={styles.velan_slide}
          />
          <p className={styles.slideText}>வேளாண் தொழிலில் மேம்பாடு</p>
        </div>
        <div className={styles.slideItem}>
          <img
            src={Assets.velan_sli1}
            alt="velan slide 2"
            className={styles.velan_slide}
          />
          <p className={styles.slideText}>தற்காப்பு ஆயுத உற்பத்தி</p>
        </div>
        <div className={styles.slideItem}>
          <img
            src={Assets.velan_sli1}
            alt="velan slide 3"
            className={styles.velan_slide}
          />
          <p className={styles.slideText}>இயந்திரங்களின் தோற்றம்</p>
        </div>
      </div>
    </div>
  );
};

export default VelanPanpaadu;
