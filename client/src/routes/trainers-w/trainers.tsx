import React from 'react';
import { Header } from '../../components/header/header';
import { ProductGrid3 } from '../../components/prod-grid3/prod-grid3';
import { Footer } from '../../components/footer/footer';
import './trainers.module.css';

export const Trainersw: React.FC = () => {
  return (
    <div className="sneakers-page">
      <Header />

      <main>
        <ProductGrid3 />
      </main>

      <Footer />
    </div>
  );
};

export default Trainersw;