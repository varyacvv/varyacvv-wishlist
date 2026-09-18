import { Code, Send, Mail } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">thank you ♡</p>

      <div className="footer__links">
        <a
          href="https://github.com/varyacvv"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
          aria-label="GitHub"
        >
          <Code size={18} strokeWidth={1.5} aria-hidden="true" />
        </a>

        <a
          href="https://t.me/varyacvv"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
          aria-label="Telegram"
        >
          <Send size={18} strokeWidth={1.5} aria-hidden="true" />
        </a>

        <a
          href="mailto:varyacvv@yandex.ru"
          className="footer__link"
          aria-label="Email"
        >
          <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>

      <p className="footer__signature">varyacvv · 2026</p>
    </footer>
  );
}

export default Footer;