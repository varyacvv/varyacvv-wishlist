import { useState } from 'react';
import EntryScreen from './components/EntryScreen/EntryScreen';
import Header from './components/Header/Header';
import WishlistGrid from './components/WishlistGrid/WishlistGrid';
import WishlistCard from './components/WishlistCard/WishlistCard';
import WishlistModal from './components/WishlistModal/WishlistModal';
import DonationModal from './components/DonationModal/DonationModal';
import FAQModal from './components/FAQModal/FAQModal';
import Footer from './components/Footer/Footer';
import { wishlistItems } from './data/wishlist';
import type { WishlistItem, WishlistCardAccent } from './types/wishlist';
import './App.css';

type Screen = 'entry' | 'wishlist';
type OpenModal = 'donate' | 'faq' | null;

const DONATION_URL = 'https://tbank.ru/cf/2JmmFIlUUt5';

const CARD_COLORS: WishlistCardAccent[] = [
  'lavender', 'pink', 'mint', 'yellow',
  'yellow', 'mint', 'pink', 'lavender',
];

function App() {
  const [screen, setScreen] = useState<Screen>('entry');
  const [openModal, setOpenModal] = useState<OpenModal>(null);
  const [selectedItem, setSelectedItem] = useState<WishlistItem | null>(null);

  function handleAction(item: WishlistItem) {
    if (item.action === 'modal') {
      setSelectedItem(item);
    } else if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  }

  if (screen === 'entry') {
    return (
      <div className="app">
        <EntryScreen
          donationUrl={DONATION_URL}
          onOpenWishlist={() => setScreen('wishlist')}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <Header
          onOpenDonate={() => setOpenModal('donate')}
          onOpenFaq={() => setOpenModal('faq')}
        />

        <main>
          <WishlistGrid>
            {wishlistItems.map((item, index) => (
              <WishlistCard
                key={item.id}
                item={item}
                accent={CARD_COLORS[index % CARD_COLORS.length]}
                onAction={handleAction}
              />
            ))}
          </WishlistGrid>
        </main>

        <Footer />
      </div>

      <DonationModal
        isOpen={openModal === 'donate'}
        onClose={() => setOpenModal(null)}
        donationUrl={DONATION_URL}
      />

      <FAQModal
        isOpen={openModal === 'faq'}
        onClose={() => setOpenModal(null)}
      />

      <WishlistModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}

export default App;