import './shoes.module.css';
import { Header } from '../../components/header/header';
import { ProductGrid4 } from '../../components/prod-grid4/prod-grid4';
import { Footer } from '../../components/footer/footer';

interface Shoesw {}

export const Shoesw: React.FC<WomensShoesProps> = () => {
  return (
    <div className="womens-shoes">
      <Header />

      <main>
        <h1 className="page-title">
          Женские туфли
        </h1>

        <ProductGrid4 />
      </main>

      <Footer />
    </div>
  );
};

export default Shoesw;