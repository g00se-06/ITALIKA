import * as React from "react";
import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.aboutSection}>
        о нас
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contactTitle}>
          горячая линия
        </div>
        <div className={styles.contactPhone}>
          7(240)807-23-91
        </div>
        <div className={styles.contactEmail}>
          italika-ht@gmail.com
        </div>
      </div>
      <div className={styles.socialSection}>
        наши социальные сети
      </div>
    </div>
  );
};

export default Footer