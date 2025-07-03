import './prod-card4.module.css';

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  price: string;
  onBuyClick?: () => void;
  onFavoriteClick?: () => void;
}

export const ProductCard4: React.FC<ProductCardProps> = ({
  imageUrl,
  productName,
  price,
  onBuyClick,
  onFavoriteClick,
}) => {
  return (
    <article className="product-card">
      <img
        src={imageUrl}
        alt={productName}
        className="product-card__image"
      />

      <div className="product-card__details">
        <span>{productName}</span>
        <br />
        <span>{price}</span>
      </div>

      <button
        onClick={onBuyClick}
        className="product-card__buy-btn"
        aria-label={`Buy ${productName}`}
      >
        купить
      </button>

      <button
        onClick={onFavoriteClick}
        className="product-card__favorite-btn"
        aria-label={`Add ${productName} to favorites`}
      >
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg width=\"24\" height=\"20\" viewBox=\"0 0 24 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 23px; height: 18px\"> <path d=\"M4.25742 2.01552C6.53355 -0.280724 12.6276 1.05667 12.3781 8.07562C12.1285 15.0946 11.9756 17.9507 11.9756 17.9507C11.9756 17.9507 7.63564 14.8213 4.49903 12.1598C1.36242 9.4983 1.98129 4.31176 4.25742 2.01552Z\" fill=\"#66335B\" stroke=\"#66335B\" stroke-width=\"1.2\"></path> <path d=\"M19.4705 2.5895C17.471 0.11769 12.1469 0.910705 12.5464 8.03876C12.9459 15.1668 13 18 13 18C13 18 16.9348 15.3499 19.535 12.853C22.1352 10.3562 21.47 5.0613 19.4705 2.5895Z\" fill=\"#66335B\" stroke=\"#66335B\" stroke-width=\"1.2\"></path> </svg>",
          }}
        />
      </button>
    </article>
  );
};

export default ProductCard4