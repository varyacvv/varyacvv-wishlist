import { Heart } from 'lucide-react';
import qrImage from '../../assets/images/qr-donate.jpg';
import './EntryScreen.css';

type EntryScreenProps = {
    donationUrl: string;
    onOpenWishlist: () => void;
};

function EntryScreen({ donationUrl, onOpenWishlist }: EntryScreenProps) {
    return (
        <section className="entry">
            <h1 className="entry__title">
                varyacvv's wishlist{' '}
                <Heart
                    className="entry__heart"
                    size={34}
                    strokeWidth={1.5}
                    aria-hidden="true"
                />
            </h1>

            <p className="entry__subtitle">
                things I&apos;d love to have · things I&apos;d love to do
            </p>

            <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="entry__qr-link"
                aria-label="Перейти в Т-Банк"
            >
                <img src={qrImage} alt="QR-код для доната" className="entry__qr-image" />
            </a>
            <p className="entry__note">
                это ссылка на сбор денег в Т-Банке.
                <br />
                они пойдут на подарки для меня:
                <br />
                на день рождения, новый год и т.д.
                <br />
                <br />
                если хочешь выбрать конкретный подарок,
                <br />
                напиши комментарий к донату
            </p>

            <button
                type="button"
                className="entry__button"
                onClick={onOpenWishlist}
            >
                открыть вишлист →
            </button>
        </section>
    );
}

export default EntryScreen;