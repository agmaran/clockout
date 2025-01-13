import React from 'react';
import ListItem, { ListItemProps } from './Item';

interface TopMoversProps {
    trending?: ListItemProps[];
    topGainers?: ListItemProps[];
    topLosers?: ListItemProps[];
    isFetching: boolean;
  }

type TabName = 'trending' | 'topGainers' | 'topLosers';

const TopMovers: React.FC<TopMoversProps> = ({ trending, topGainers, topLosers, isFetching }) => {
  const [activeTab, setActiveTab] = React.useState<TabName>('trending');

  const handleTabClick = (tab: TabName) => {
    setActiveTab(tab);
  };

  return (
    <div className='bg-gray-950 p-10 md:p-20'>
      <div className='text-gray-100 font-medium text-2xl mb-10'>Top Movers</div>
      <div className='flex flex-row mb-10'>
        <div
          className={`${activeTab === 'trending' ? 'bg-gray-900 rounded-full' : ''} text-gray-500 font-medium text-base flex-1 text-center p-3 cursor-pointer`}
          onClick={() => handleTabClick('trending')}
        >
          Trending
        </div>
        <div
          className={`${activeTab === 'topGainers' ? 'bg-gray-900 rounded-full' : ''} text-gray-500 font-medium text-base flex-1 text-center p-3 cursor-pointer`}
          onClick={() => handleTabClick('topGainers')}
        >
          Top Gainers
        </div>
        <div
          className={`${activeTab === 'topLosers' ? 'bg-gray-900 rounded-full' : ''} text-gray-500 font-medium text-base flex-1 text-center p-3 cursor-pointer`}
          onClick={() => handleTabClick('topLosers')}
        >
          Top Losers
        </div>
      </div>
      {isFetching ? <div className="flex flex-col ...">
        <div className='animate-bounce my-2 h-12 w-full bg-gray-900 rounded-full'></div>
        <div className='animate-bounce my-2 h-12 w-full bg-gray-900 rounded-full'></div>
        <div className='animate-bounce my-2 h-12 w-full bg-gray-900 rounded-full'></div>
        <div className='animate-bounce my-2 h-12 w-full bg-gray-900 rounded-full'></div>
        <div className='animate-bounce my-2 h-12 w-full bg-gray-900 rounded-full'></div>
      </div> : <div>{activeTab === 'trending' && <div className='flex flex-col'>
          {trending?.map((mover) => (
            <ListItem key={mover.symbol} {...mover} />
          ))}
        </div>}
      {activeTab === 'topGainers' && <div className='flex flex-col'>
          {topGainers?.map((mover) => (
            <ListItem key={mover.symbol} {...mover} />
          ))}
        </div>}
      {activeTab === 'topLosers' && <div className='flex flex-col'>
          {topLosers?.map((mover) => (
            <ListItem key={mover.symbol} {...mover} />
          ))}
        </div>}</div>}  
    </div>
  );
};

export default TopMovers;
