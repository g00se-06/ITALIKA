import React from 'react';
import { Header } from '../../components/header/header';
import { ProductGrid5 } from '../../components/prod-grid5/prod-grid';
import { Footer } from '../../components/footer/footer';
import styles from './sneakers.module.css';

interface Product {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
}

interface SneakersPageProps {
  products?: Product[];
  onBuyClick?: (productId: string) => void;
  onFavoriteClick?: (productId: string) => void;
}

export const Sneakersm: React.FC<SneakersPageProps> = ({
  products,
  onBuyClick,
  onFavoriteClick,
}) => {
  const handleBuyClick = (productId: string) => {
    console.log('Buy clicked for product:', productId);
    onBuyClick?.(productId);
  };

  const handleFavoriteClick = (productId: string) => {
    console.log('Favorite clicked for product:', productId);
    onFavoriteClick?.(productId);
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <Header />

      {/* Page Title */}
      <main>
        <h2 className={styles.pageTitle}>
          Кроссовки
        </h2>

        {/* Product Grid */}
        <ProductGrid5
          products={products}
          onBuyClick={handleBuyClick}
          onFavoriteClick={handleFavoriteClick}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sneakersm;
