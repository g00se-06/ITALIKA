import './sneakers.module.css';
import { Header } from '../../components/header/header';
import { ProductGrid2 } from '../../components/prod-grid2/prod-grid2';
import { Footer } from '../../components/footer/footer';

// Mock product data - in a real app this would come from an API
const mockProducts = Array.from({ length: 25 }, (_, index) => ({
  id: `product-${index + 1}`,
  imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7768f4be51ce959031727e0b41c9441cd4619599?width=396',
  name: 'Кроссовки Calpierre E2708',
  price: '31 040 ₽',
}));

export const Sneakersw: React.FC = () => {
  const handleProductBuy = (productId: string) => {
    console.log('Buy product:', productId);
    // Handle buy action
  };

  const handleProductFavorite = (productId: string) => {
    console.log('Favorite product:', productId);
    // Handle favorite action
  };

  return (
    <div className="sneakers-page">
      <Header />

      {/* Page Title */}
      <h2 className="sneakers-page__title">
        Кроссовки
      </h2>

      <ProductGrid2
        products={mockProducts}
        onProductBuy={handleProductBuy}
        onProductFavorite={handleProductFavorite}
      />

      <Footer />
    </div>
  );
};

export default Sneakersw;