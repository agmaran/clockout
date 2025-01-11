import React from 'react';
import ListItem, { ListItemProps } from './Item';

interface TopMoversProps {
    trending: ListItemProps[];
    topGainers: ListItemProps[];
    topLosers: ListItemProps[];
  }

type TabName = 'trending' | 'topGainers' | 'topLosers';

const TopMovers: React.FC<TopMoversProps> = ({ trending, topGainers, topLosers }) => {
  const [activeTab, setActiveTab] = React.useState<TabName>('trending');

  const handleTabClick = (tab: TabName) => {
    setActiveTab(tab);
  };

  return (
    <div className="top-movers">
      <div className="tabs">
        <button
          className={activeTab === 'trending' ? 'active' : ''}
          onClick={() => handleTabClick('trending')}
        >
          Trending
        </button>
        <button
          className={activeTab === 'topGainers' ? 'active' : ''}
          onClick={() => handleTabClick('topGainers')}
        >
          Top Gainers
        </button>
        <button
          className={activeTab === 'topLosers' ? 'active' : ''}
          onClick={() => handleTabClick('topLosers')}
        >
          Top Losers
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'trending' && <ul>
            {trending.map((mover) => (
              <ListItem key={mover.symbol} {...mover} />
            ))}
          </ul>}
        {activeTab === 'topGainers' && <ul>
            {topGainers.map((mover) => (
              <ListItem key={mover.symbol} {...mover} />
            ))}
          </ul>}
        {activeTab === 'topLosers' && <ul>
            {topLosers.map((mover) => (
              <ListItem key={mover.symbol} {...mover} />
            ))}
          </ul>}
      </div>
    </div>
  );
};

export default TopMovers;
