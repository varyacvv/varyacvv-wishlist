import Modal from '../Modal/Modal';
import type { WishlistItem } from '../../types/wishlist';
import './WishlistModal.css';

type WishlistModalProps = {
  item: WishlistItem | null;
  onClose: () => void;
};

function WishlistModal({ item, onClose }: WishlistModalProps) {
  const isOpen = item !== null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={item?.title ?? ''}
    >
      {item && (
        <div className="wishlist-modal">
          <span className="wishlist-modal__type">{item.type}</span>
          <p className="wishlist-modal__description">{item.description}</p>
          <p className="wishlist-modal__price">{item.price}</p>
        </div>
      )}
    </Modal>
  );
}

export default WishlistModal;