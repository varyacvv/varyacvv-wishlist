import './WishlistCard.css';

function WishlistCard() {
  return (
    <article className="wishlist-card" aria-label="Wishlist item placeholder">
      <div className="wishlist-card__image-placeholder">image</div>
      <span className="wishlist-card__type">WANT</span>
      <h3 className="wishlist-card__title">placeholder</h3>
      <p className="wishlist-card__description">placeholder</p>
      <span className="wishlist-card__price">0 ₽</span>
    </article>
  );
}

export default WishlistCard;