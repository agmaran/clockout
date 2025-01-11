// App.tsx
import React from 'react';
import Header from './components/Header';
import BuyingPower from './components/BuyingPower';
import Watchlist from './components/list/Watchlist';
import TopMovers from './components/list/TopMovers';
import Footer from './components/Footer';
import { ListItemProps } from './components/list/Item';

const watchlistItems: ListItemProps[] = [
  { symbol: 'SPTF', name: 'Spotify', price: 102.45, change: 0.48 },
];

const App: React.FC = () => {
  return (
    <div className="app">
      <Header totalInvesting={12535} change={0.48} />
      <BuyingPower buyingPower={840.5} />
      <Watchlist items={watchlistItems} />
      <TopMovers trending={watchlistItems} topLosers={watchlistItems} topGainers={watchlistItems}  />
      <Footer companyName='Polygon' copyrightYear={2025} contactEmail='support@polygon.io' termsOfServiceLink='https://polygon.io/terms' privacyPolicyLink='https://polygon.io/privacy' />
    </div>
  );
};

export default App;