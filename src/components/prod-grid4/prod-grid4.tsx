import React from 'react';
import { ProductCard4 } from '../prod-card4/prod-card4';
import './prod-grid4.module.css';

interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: string;
}

interface ProductGridProps {
  products: Product[];
  onProductBuy?: (productId: string) => void;
  onProductFavorite?: (productId: string) => void;
}

export const ProductGrid4: React.FC<ProductGridProps> = ({
  products,
  onProductBuy,
  onProductFavorite,
}) => {
  return (
    <section className="product-grid">
      <div className="product-grid__container">
        {products.map((product) => (
          <ProductCard4
            key={product.id}
            imageUrl={product.imageUrl}
            productName={product.name}
            price={product.price}
            onBuyClick={() => onProductBuy?.(product.id)}
            onFavoriteClick={() => onProductFavorite?.(product.id)}
          />
        ))}
      </div>
    </section>
  );
};
 export default ProductGrid4