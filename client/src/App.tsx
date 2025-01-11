import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import BuyingPower from './components/BuyingPower';
import Watchlist from './components/list/Watchlist';
import TopMovers from './components/list/TopMovers';
import { ListItemProps } from './components/list/Item';
import { getDailyStockPrices } from './api/stock';

function getYesterday(): string {
  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000).toLocaleDateString('en-CA');
  return yesterday;
}

const App: React.FC = () => {
  const [stockData, setStockData] = React.useState<ListItemProps[]>();
  React.useEffect(() => {
    const getStockData = async () => {
      const yesterday = getYesterday();
      const response = await getDailyStockPrices(yesterday);
      console.log(response);
      setStockData(response ?? []);
    };
    getStockData();
  }, []);
  return (
    <MainContainer>
      <Header totalInvesting={12535} change={0.48} />
      <BuyingPower buyingPower={840.5} />
      {stockData && <Watchlist items={stockData} />}
      {stockData && <TopMovers trending={stockData} topLosers={stockData} topGainers={stockData}  />}
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
