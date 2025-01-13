import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from './Header';
import BuyingPower from './BuyingPower';
import WatchList from './list/Watchlist';
import TopMovers from './list/TopMovers';
import { getDailyStockPrices, DailyStockPricesData } from '../api/stock';

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
  const { data, isFetching } = useQuery({
    queryKey: ['getDailyStockPrices'],
    queryFn: () => getDailyStockPrices(getLastTradeDay()),
  })
  
  React.useEffect(() => {
    if (data) {
      setStockData(data);
      localStorage.setItem('stockData', JSON.stringify(data));
    } else {
      setStockData(JSON.parse(localStorage.getItem('stockData') ?? ''));
    }
  }, [data]);

  return (
    <div className='flex flex-col w-full h-full bg-gray-950'>
      <Header totalInvesting={12535} items={stockData?.watchListData} isFetching={isFetching} />
      <BuyingPower buyingPower={840.5} />
      <WatchList items={stockData?.watchListData} isFetching={isFetching} />
      <TopMovers trending={stockData?.trendingData} topLosers={stockData?.losersData} topGainers={stockData?.gainersData} isFetching={isFetching}  />
    </div>
  );
};

export default App;
