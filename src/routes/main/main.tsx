import { Header } from "../../components/header/header";
import { Summer } from "../../components/summer/summer";
import { ProductGrid1 } from "../../components/prod-grid1/prod-grid1";
import { Footer } from "../../components/footer/footer";
import styles from "./main.module.css";

export const Main: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Header />

      <div className={styles.headerLine}>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=\"13:61\" width=\"1440\" height=\"4\" viewBox=\"0 0 1440 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"header-line\" style=\"width: 100%; height: 4px; position: absolute; top: 114px; left: 0\"> <path d=\"M0 2H1440\" stroke=\"#2D2D2D\" stroke-opacity=\"0.63\" stroke-width=\"4\"></path> </svg>",
          }}
        />
      </div>

      <Summer />

      <ProductGrid1 />

      <div className={styles.description}>
        <span>Интернет магазин итальянской обуви ITALIKA</span>
        <br />
        <span>
          В нашем интернет магазине обуви можно купить мужскую и женскую обувь
          ведущих итальянских обувных марок. В Онлайн-Обувь представлены новые
          коллекции итальянской обуви по самым низким ценам.
        </span>
        <br />
        <span>
          Интернет каталог обуви на сайте еженедельно обновляется туфлями,
          босоножками, ботильонами, сапогами и сумками новых коллекций.
        </span>
        <br />
        <span>
          Наш магазин принимает заказы на обувь 24 часа в сутки. Теперь возможно
          приобрести итальянскую обувь не только жителям Москвы и ближайшего
          подмосковья, но и почитателям обуви из Италии со всей России.
        </span>
        <br />
        <span>
          Только у нас в интернет магазине цены на новинки обуви существенно
          отличаются от цен в обувных бутиках и магазинах в Москве. Если вы
          цените качество, стиль и комфорт, то вы навсегда остановите свой выбор
          на женской и мужской обуви из Италии, широко представленной в магазине
          ITALIKA.
        </span>
        <br />
        <span>
          Мы закупаем обувь из Италии без посредников, именно поэтому мы можем
          круглый год предлагать вам модную обувь по супер низким ценам таких
          маркок, как Baldinini, FABI, LORIBLU, SHY, Giorgio Fabiani, Renzi,
          Norma J.Baker, Alexander HOTTO, Gianfranco Butteri и др.
        </span>
      </div>

      <Footer />
    </div>
  );
};

export default Main