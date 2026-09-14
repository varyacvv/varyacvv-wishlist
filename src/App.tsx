import { useState } from 'react';
import EntryScreen from './components/EntryScreen/EntryScreen';
import Header from './components/Header/Header';
import WishlistGrid from './components/WishlistGrid/WishlistGrid';
import WishlistCard from './components/WishlistCard/WishlistCard';
import WishlistModal from './components/WishlistModal/WishlistModal';
import Footer from './components/Footer/Footer';
import './App.css';

type Screen = 'entry' | 'wishlist';

const DONATION_URL = 'https://tbank.ru/cf/2JmmFIlUUt5';

function App() {
  const [screen, setScreen] = useState<Screen>('entry');

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
        <Header />

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

      <WishlistModal />
    </div>
  );
}

export default App;