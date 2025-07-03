import React from 'react';
import { ProductCard3 } from '../prod-card3/prod-card3';
import './prod-grid3.module.css';

interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
}

export const ProductGrid3: React.FC = () => {
  // Generate 25 products for the grid
  const products: Product[] = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f8ed99c8187c831e7cfe8fea22ac3402e9485ed?width=396",
    name: "Кеды Iceberg E2534",
    price: "30 660 ₽"
  }));

  const handleBuyClick = (productId: number) => {
    console.log(`Buy clicked for product ${productId}`);
  };

  const handleFavoriteClick = (productId: number) => {
    console.log(`Favorite clicked for product ${productId}`);
  };

  return (
    <section className="product-grid-section">
      <h2 className="section-title">
        Кеды
      </h2>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard3
            key={product.id}
            imageUrl={product.imageUrl}
            productName={product.name}
            price={product.price}
            onBuyClick={() => handleBuyClick(product.id)}
            onFavoriteClick={() => handleFavoriteClick(product.id)}
          />
        ))}
      </div>
    </section>
  );
};
 export default ProductGrid3