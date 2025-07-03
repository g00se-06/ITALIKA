import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Link } from "react-router";

export const Katalog = () => {
  return (
    <div>
      <Header />

      <main>
        <div className="bg-rgba(132, 216, 121, 0.11)-800 grid grid-cols-1 gap-4">
            <h3>Каталог</h3>
            <div className="w">
                <Link to="client\src\routes\sneakers-w\sneakers.tsx">
                <p>Кеды</p>
                </Link>
                <Link to="client\src\routes\trainers-w\trainers.tsx">
                <p>Кроссовки</p>
                </Link>
                <Link to="client\src\routes\shoes-w\shoes.tsx">
                <p>Туфли</p>
                </Link>
            </div>
            <div className="m">
                <Link to="client\src\routes\sneakers-m\sneakers.tsx">
                <p>Кеды</p>
                </Link>
                <Link to="client\src\routes\trainers-m\trainers.tsx">
                <p>Кроссовки</p>
                </Link>
                <Link to="client\src\routes\shoes-m\shoes.tsx">
                <p>Туфли</p>
                </Link>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Katalog;