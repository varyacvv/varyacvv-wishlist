import './WishlistCard.css';

type WishlistCardProps = {
  accent?: 'lavender' | 'pink' | 'mint' | 'yellow';
  tilt?: 'left' | 'right';
};

function WishlistCard({ accent = 'lavender', tilt }: WishlistCardProps) {
  let className = `wishlist-card wishlist-card--${accent}`;

  if (tilt === 'left') {
    className += ' wishlist-card--tilt-left';
  }
  if (tilt === 'right') {
    className += ' wishlist-card--tilt-right';
  }

  return (
    <article className={className}>
      <div className="wishlist-card__image-placeholder">image</div>
      <span className="wishlist-card__type">WANT</span>
      <h3 className="wishlist-card__title">placeholder</h3>
      <p className="wishlist-card__description">placeholder description</p>
      <span className="wishlist-card__price">0 ₽</span>
    </article>
  );
}

export default WishlistCard;