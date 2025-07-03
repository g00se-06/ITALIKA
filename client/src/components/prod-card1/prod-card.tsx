"use client";
import * as React from "react";
import styles from "./prod-card.module.css";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
}

export const ProductCard1: React.FC<ProductCardProps> = ({ imageUrl, title, price }) => {
  return (
    <div className={styles.productCard}>
      <img
        src={imageUrl}
        alt=""
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <span>{title}</span>
        <br />
        <span>{price}</span>
      </div>
      <div className={styles.productActions}>
        <div className={styles.buyButton}>
          купить
        </div>
        <div className={styles.favoriteIcon}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"24\" height=\"20\" viewBox=\"0 0 24 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"favorite-icon\" style=\"width: 23px; height: 18px\"> <path d=\"M4.25731 2.01552C6.53344 -0.280724 12.6275 1.05667 12.3779 8.07562C12.1284 15.0946 11.9755 17.9507 11.9755 17.9507C11.9755 17.9507 7.63553 14.8213 4.49891 12.1598C1.3623 9.4983 1.98118 4.31176 4.25731 2.01552Z\" fill=\"#66335B\" stroke=\"#66335B\" stroke-width=\"1.2\"></path> <path d=\"M19.4705 2.58949C17.4711 0.117686 12.1469 0.910701 12.5464 8.03875C12.9459 15.1668 13 18 13 18C13 18 16.9348 15.3499 19.535 12.853C22.1352 10.3561 21.47 5.0613 19.4705 2.58949Z\" fill=\"#66335B\" stroke=\"#66335B\" stroke-width=\"1.2\"></path> </svg>",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard1