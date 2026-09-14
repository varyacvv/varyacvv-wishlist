import { useState } from 'react';
import EntryScreen from './components/EntryScreen/EntryScreen';
import Header from './components/Header/Header';
import WishlistGrid from './components/WishlistGrid/WishlistGrid';
import WishlistCard from './components/WishlistCard/WishlistCard';
import WishlistModal from './components/WishlistModal/WishlistModal';
import DonationModal from './components/DonationModal/DonationModal';
import FAQModal from './components/FAQModal/FAQModal';
import Footer from './components/Footer/Footer';
import './App.css';

type Screen = 'entry' | 'wishlist';
type OpenModal = 'donate' | 'faq' | null;

const DONATION_URL = 'https://tbank.ru/cf/2JmmFIlUUt5';

function App() {
  const [screen, setScreen] = useState<Screen>('entry');
  const [openModal, setOpenModal] = useState<OpenModal>(null);

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
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
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

      <WishlistModal />
    </div>
  );
}

export default App;