import React from 'react';
import { ProductCard5 } from '../prod-card5/prod-card';
import s from './prod-grid.module.css';

interface Product {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
}

interface ProductGridProps {
  products?: Product[];
  onBuyClick?: (productId: string) => void;
  onFavoriteClick?: (productId: string) => void;
}

export const ProductGrid5: React.FC<ProductGridProps> = ({
  products = [],
  onBuyClick,
  onFavoriteClick,
}) => {
  // Default products if none provided
  const defaultProducts: Product[] = Array.from({ length: 25 }, (_, index) => ({
    id: `product-${index + 1}`,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aac6a9d07c43b1643362023633b96a1f4ea04c7e?width=396',
    title: 'Кроссовки Solo Noi H0737',
    price: '15 040 ₽',
  }));

  const displayProducts = products.length > 0 ? products : defaultProducts;

  return (
    <section className={s.grid}>
      {displayProducts.map((product) => (
        <ProductCard5
          key={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          price={product.price}
          onBuyClick={() => onBuyClick?.(product.id)}
          onFavoriteClick={() => onFavoriteClick?.(product.id)}
        />
      ))}
    </section>
  );
};

 export default ProductGrid5