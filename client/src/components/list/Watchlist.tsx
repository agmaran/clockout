import React from 'react';
import WatchListItem, { ListItemProps } from './Item';

interface WatchListProps {
  items: ListItemProps[]; // Array of WatchlistItemProps objects
}

const WatchList: React.FC<WatchListProps> = ({ items }) => {
  return (
    <ul className="watchlist">
      {items.map(item => (
        <WatchListItem key={item.symbol} {...item} />
      ))}
    </ul>
  );
};

export default WatchList;
