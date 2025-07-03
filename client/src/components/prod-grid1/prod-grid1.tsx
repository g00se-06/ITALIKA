"use client";
import * as React from "react";
import { ProductCard1 } from "../prod-card1/prod-card";
import styles from "./prod-grid1.module.css";

interface Product {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
}

export const ProductGrid1: React.FC = () => {
  const products: Product[] = [
    {
      id: "1",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/af430f23082130f4d6326feca8dfe18aa7d3e6e4?width=396",
      title: "Кеды Iceberg E2534",
      price: "30 660 ₽"
    },
    {
      id: "2",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e1c8e392c421050c0417b8cdcfddbed3e3d237d?width=396",
      title: "Босоножки Baldinini E2616",
      price: "36 400 ₽"
    },
    {
      id: "3",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f8b13c17979a19cbe42d7885dabd065340553b6?width=396",
      title: "Кроссовки Calpierre E2708",
      price: "31 040 ₽"
    },
    {
      id: "4",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8215382189476c2ea481014463fa4629820aef5?width=396",
      title: "Туфли Calpierre X1346",
      price: "35 500 ₽"
    },
    {
      id: "5",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/134a716cbfeb390548dce76afe9e77f93290721d?width=396",
      title: "Ботинки Corsani Firenze D0208",
      price: "20 500 ₽"
    },
    {
      id: "6",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/88c3040e6c556a94493341e75a03dc38a918e503?width=396",
      title: "Туфли Loriblu C0029",
      price: "51 600 ₽"
    },
    {
      id: "7",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/27186359a72ad3eb1d8b78a892c21ddf8ad6454e?width=396",
      title: "Кроссовки Solo Noi H0737",
      price: "15 040 ₽"
    },
    {
      id: "8",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/056bbac60b0544ff1ef6211883981c8cf11dc686?width=396",
      title: "Туфли Loriblu G0347",
      price: "43 990 ₽"
    },
    {
      id: "9",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d21fc89fbf0d22bff67cf0772725fb6eb560ad5a?width=396",
      title: "Кроссовки Ambitious G0339",
      price: "28 950 ₽"
    },
    {
      id: "10",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/51e0f1fb0956cc2a253b9fc21115fa0763d9d3d7?width=396",
      title: "Кеды Ambitious G0333",
      price: "28 600 ₽"
    }
  ];

  return (
    <>
      <div className={styles.sectionTitle}>
        НОВИНКИ
      </div>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard1
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default ProductGrid1