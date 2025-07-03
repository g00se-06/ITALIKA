import { Header } from '../../components/header/header';
import { ProductGrid6 } from '../../components/prod-grid6/prod-grid';
import { Footer } from '../../components/footer/footer';
import styles from './trainers.module.css';

export const Trainersm = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <h2 className={styles.pageTitle}>
          Кеды
        </h2>

        <ProductGrid6 />
      </main>

      <Footer />
    </div>
  );
};

export default Trainersm;