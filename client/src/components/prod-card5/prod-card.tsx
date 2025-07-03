import s from './prod-card.module.css';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  onBuyClick?: () => void;
  onFavoriteClick?: () => void;
}

export const ProductCard5: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  onBuyClick,
  onFavoriteClick,
}) => {
  return (
    <article className={s.card}>
      <img
        src={imageUrl}
        alt={title}
        className={s.productImage}
      />

      <div className={s.productInfo}>
        <p>
          <span>{title}</span>
          <br />
          <span>{price}</span>
        </p>
      </div>

      <button
        onClick={onBuyClick}
        className={s.buyButton}
        aria-label={`Купить ${title}`}
      >
        купить
      </button>

      <button
        onClick={onFavoriteClick}
        className={s.favoriteButton}
        aria-label={`Добавить в избранное ${title}`}
      >
        <div
          className={s.favoriteIcon}
          dangerouslySetInnerHTML={{
            __html:
              "<svg width=\"24\" height=\"20\" viewBox=\"0 0 24 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"favorite-icon\"> <path d=\"M4.25742 2.01552C6.53355 -0.280724 12.6276 1.05667 12.3781 8.07562C12.1285 15.0946 11.9756 17.9507 11.9756 17.9507C11.9756 17.9507 7.63564 14.8213 4.49903 12.1598C1.36242 9.4983 1.98129 4.31176 4.25742 2.01552Z\" fill=\"#66335B\" stroke=\"#66335B\" stroke-width=\"1.2\"></path> <path d=\"M19.4705 2.58925C17.471 0.117446 12.1469 0.91046 12.5464 8.03851C12.9459 15.1666 13 17.9998 13 17.9998C13 17.9998 16.9348 15.3497 19.535 12.8528C22.1352 10.3559 21.47 5.06106 19.4705 2.58925Z\" fill=\"#66335B\" stroke=\"#66335B\" stroke-width=\"1.2\"></path> </svg>",
          }}
        />
      </button>
    </article>
  );
};

export default ProductCard5