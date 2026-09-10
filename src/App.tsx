import Header from './components/Header/Header';
import WishlistGrid from './components/WishlistGrid/WishlistGrid';
import WishlistCard from './components/WishlistCard/WishlistCard';
import WishlistModal from './components/WishlistModal/WishlistModal';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
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

          <FAQ />
        </main>

        <Footer />
      </div>

      <WishlistModal />
    </div>
  );
}

export default App;