import * as React from "react";
import styles from "./summer.module.css";

export const Summer: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.mainBanner}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6a287a482dda069c16bd08c21de6c724ebc6520?width=1556"
          alt=""
          className={styles.bannerImage}
        />
        <div className={styles.bannerText}>
          ЛЕТНЯЯ КОЛЛЕКЦИЯ
        </div>
      </div>
      <div className={styles.sideImages}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/db1b25921be6bc2df832df8eeb3c30a7a0ef4273?width=744"
          alt=""
          className={styles.sideImage}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/85a6ff82491cd69be7853c60cd0689a1ee71b31b?width=744"
          alt=""
          className={styles.sideImage}
        />
      </div>
    </div>
  );
};



export default Summer