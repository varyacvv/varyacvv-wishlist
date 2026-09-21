import Modal from '../Modal/Modal';
import './FAQModal.css';

type FAQModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function FAQModal({ isOpen, onClose }: FAQModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="FAQ">
      <div className="faq-modal">
        <p className="faq-modal__text">
          это мой личный вишлист: список вещей и забот,
          которые я хотела бы получить или сделать.
        </p>

        <p className="faq-modal__text">
          кнопка DONATE открывает QR-код на сбор в Т-Банке.
          всё собранное пойдет на подарки для меня:
          на день рождения, новый год и другие события.
        </p>

        <p className="faq-modal__text">
          если хочешь помочь с конкретным подарком,
          напиши комментарий к переводу.
          сумма может быть любой ♡
        </p>
      </div>
    </Modal>
  );
}

export default FAQModal;