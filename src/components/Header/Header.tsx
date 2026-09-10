import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__titles">
        <h1 className="header__title">my little wishlist ♡</h1>
        <p className="header__subtitle">
          things I&apos;d love to have · things I&apos;d love to do
        </p>
      </div>

      <button type="button" className="header__faq-button">
        FAQ
      </button>
    </header>
  );
}

export default Header;