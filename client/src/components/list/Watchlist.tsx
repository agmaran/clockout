import React from 'react';
import WatchListItem, { ListItemProps } from './Item';

interface WatchListProps {
  items: ListItemProps[] | undefined;
  isFetching: boolean;
}

const WatchList: React.FC<WatchListProps> = ({ items, isFetching }) => {
  return (
    <div className='bg-gray-900 p-10 md:p-20'>
      <div className='text-gray-100 font-medium text-2xl mb-10'>WatchList</div>
      {isFetching ? <div className="flex flex-col ...">
        <div className='animate-bounce my-2 h-12 w-full bg-gray-950 rounded-full'></div>
        <div className='animate-bounce my-2 h-12 w-full bg-gray-950 rounded-full'></div>
        <div className='animate-bounce my-2 h-12 w-full bg-gray-950 rounded-full'></div>
      </div> : <div className='flex flex-col'>
        {items?.map(item => (
          <WatchListItem key={item.symbol} {...item} />
        ))}
      </div>}
    </div>
  );
};

export default WatchList;
