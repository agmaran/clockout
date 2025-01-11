import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import BuyingPower from './components/BuyingPower';
import Watchlist from './components/list/Watchlist';
import TopMovers from './components/list/TopMovers';
import { ListItemProps } from './components/list/Item';

const watchlistItems: ListItemProps[] = [
  { symbol: 'SPTF', name: 'Spotify', price: 102.45, change: 0.48 },
];

const App: React.FC = () => {
  return (
    <MainContainer>
      <Header totalInvesting={12535} change={0.48} />
      <BuyingPower buyingPower={840.5} />
      <Watchlist items={watchlistItems} />
      <TopMovers trending={watchlistItems} topLosers={watchlistItems} topGainers={watchlistItems}  />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 0px;
  width: 100%;
  background-color: #141414;
  height: 100%;
`;

export default App;
