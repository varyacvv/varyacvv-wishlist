import './WishlistGrid.css';

type WishlistGridProps = {
  children?: React.ReactNode;
};

function WishlistGrid({ children }: WishlistGridProps) {
  return <section className="wishlist-grid">{children}</section>;
}

export default WishlistGrid;