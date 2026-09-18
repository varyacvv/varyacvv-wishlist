import type { WishlistItem, WishlistCardAccent } from '../../types/wishlist';
import './WishlistCard.css';

type WishlistCardProps = {
  item: WishlistItem;
  accent: WishlistCardAccent;
  onAction: (item: WishlistItem) => void;
};

function WishlistCard({ item, accent, onAction }: WishlistCardProps) {
  let className = `wishlist-card wishlist-card--${accent}`;

  if (item.tilt === 'left') {
    className += ' wishlist-card--tilt-left';
  }
  if (item.tilt === 'right') {
    className += ' wishlist-card--tilt-right';
  }

  const buttonLabel = item.action === 'modal' ? 'открыть' : 'оплатить';

  return (
    <article className={className}>
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="wishlist-card__image"
        />
      ) : (
        <div className="wishlist-card__image-placeholder">image</div>
      )}

      <h3 className="wishlist-card__title">{item.title}</h3>
      <p className="wishlist-card__description">{item.description}</p>

      <div className="wishlist-card__footer">
        <span className="wishlist-card__price">{item.price}</span>
        <button
          type="button"
          className="wishlist-card__button"
          onClick={() => onAction(item)}
        >
          {buttonLabel}
        </button>
      </div>
    </article>
  );
}

export default WishlistCard;