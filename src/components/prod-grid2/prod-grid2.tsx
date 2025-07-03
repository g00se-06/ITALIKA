import './prod-grid2.module.css';
import { ProductCard2 } from '../prod-card2/prod-card2';

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

export const ProductGrid2: React.FC<ProductGridProps> = ({
  products,
  onProductBuy,
  onProductFavorite,
}) => {
  return (
    <section className="product-grid">
      <div className="product-grid__container">
        {products.map((product) => (
          <ProductCard2
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

export default ProductGrid2