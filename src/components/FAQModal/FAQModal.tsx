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
          это личный вишлист: список вещей и забот,
          которые я хотела бы получить или сделать.
        </p>

        <p className="faq-modal__text">
          кнопка <strong>DONATE</strong> открывает окно
          с QR-кодом на сбор в Т-Банке.
          донаты пойдут на подарки для меня:
          на день рождения, новый год и т.д.
        </p>

        <p className="faq-modal__text">
          если хочешь выбрать конкретный подарок,
          напиши комментарий к донату.
        </p>
      </div>
    </Modal>
  );
}

export default FAQModal;