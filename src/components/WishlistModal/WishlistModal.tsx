import Modal from '../Modal/Modal';
import type { WishlistItem } from '../../types/wishlist';
import './WishlistModal.css';

const GITHUB_URL = 'https://github.com/varyacvv/';

type WishlistModalProps = {
  item: WishlistItem | null;
  onClose: () => void;
};

function WishlistModal({ item, onClose }: WishlistModalProps) {
  const isOpen = item !== null;

  const modalParagraphs = item?.modalText ?? [item?.description ?? ''];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={item?.title ?? ''}>
      {item && (
        <div className="wishlist-modal">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="wishlist-modal__image"
            />
          ) : (
            <div className="wishlist-modal__image-placeholder">image</div>
          )}

          <div className="wishlist-modal__text">
            {modalParagraphs.map((paragraph, index) => (
              <p key={index} className="wishlist-modal__description">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="wishlist-modal__actions">
            <a
              href="/resume.pdf"
              download
              className="wishlist-modal__button"
            >
              скачать резюме
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="wishlist-modal__button"
            >
              мой github
            </a>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default WishlistModal;