import { useEffect } from 'react';
import { X } from 'lucide-react';
import './Modal.css';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
};

function Modal({ isOpen, onClose, title, children }: ModalProps) {
    useEffect(() => {
        if (!isOpen) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-label={title}
            >
                <div className="modal__header">
                    <h2 className="modal__title">{title}</h2>
                    <button
                        type="button"
                        className="modal__close"
                        onClick={onClose}
                        aria-label="Закрыть"
                    >
                        <X size={20} strokeWidth={1.5} aria-hidden="true" />
                    </button>
                </div>

                <div className="modal__body">{children}</div>
            </div>
        </div>
    );
}

export default Modal;