import Modal from '../Modal/Modal';
import qrImage from '../../assets/images/qr-donate.jpg';
import './DonationModal.css';

type DonationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  donationUrl: string;
};

function DonationModal({ isOpen, onClose, donationUrl }: DonationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="DONATE">
      <div className="donation-modal">
        <a
          href={donationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="donation-modal__qr-link"
          aria-label="Открыть сбор донатов в Т-Банке"
        >
          <img
            src={qrImage}
            alt="QR-код для доната"
            className="donation-modal__qr-image"
          />
        </a>

        <p className="donation-modal__note">
          отсканируй QR или нажми на него,
          <br />
          чтобы перейти к сбору в Т-Банке
        </p>
      </div>
    </Modal>
  );
}

export default DonationModal;