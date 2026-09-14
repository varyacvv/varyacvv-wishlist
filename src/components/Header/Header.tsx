import { Heart, Sparkles } from 'lucide-react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__titles">
        <h1 className="header__title">
          my little wishlist{' '}
          <Heart
            className="header__heart"
            size={30}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </h1>
        <p className="header__subtitle">
          things I&apos;d love to have · things I&apos;d love to do
        </p>
        <Sparkles
          className="header__sparkle"
          size={20}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <div className="header__actions">
        <button
          type="button"
          className="header__button header__button--primary"
        >
          DONATE
        </button>
        <button type="button" className="header__button">
          FAQ
        </button>
      </div>
    </header>
  );
}

export default Header;