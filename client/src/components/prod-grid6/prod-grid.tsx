import React from 'react';
import { ProductCard6 } from '../prod-card6/prod-card6';
import s from './prod-grid.module.css';

const products = Array(25).fill({
  imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/086b4b72d964bab523fc6136000a7de047756122?width=396",
  productName: "Кеды Ambitious G0333",
  price: "28 600 ₽"
});

export const ProductGrid6 = () => {
  return (
    <section className={s.grid}>
      {products.map((product, index) => (
        <ProductCard6
          key={index}
          imageUrl={product.imageUrl}
          productName={product.productName}
          price={product.price}
        />
      ))}
    </section>
  );
};

 export default ProductGrid6