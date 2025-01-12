import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import BuyingPower from './components/BuyingPower';
import WatchList from './components/list/Watchlist';
import TopMovers from './components/list/TopMovers';
import { getDailyStockPrices, DailyStockPricesData } from './api/stock';

// Get last trade day because data is only end of day data and market only opens from monday to friday
function getLastTradeDay(): string {
  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  const dayOfWeek = yesterday.getDay();
  if (dayOfWeek === 0) { // Sunday
    yesterday.setDate(yesterday.getDate() - 2);
  } else if (dayOfWeek === 6) { // Saturday
    yesterday.setDate(yesterday.getDate() - 1);
  }
  return yesterday.toLocaleDateString('en-CA');
}

const App: React.FC = () => {
  const [stockData, setStockData] = React.useState<DailyStockPricesData | undefined> (undefined);
  
  React.useEffect(() => {
    const getStockData = async () => {
      const lastTradeDay = getLastTradeDay();
      const response = await getDailyStockPrices(lastTradeDay);
      setStockData(response);
    };
    getStockData();
  }, []);

  return (
    <MainContainer>
      <Header totalInvesting={12535} change={0.48} />
      <BuyingPower buyingPower={840.5} />
      {stockData && <WatchList items={stockData.watchListData} />}
      {stockData && <TopMovers trending={stockData.trendingData} topLosers={stockData.losersData} topGainers={stockData.gainersData}  />}
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
