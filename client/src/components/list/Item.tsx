import React from 'react';
import TrendingUpIcon from '../icons/TrendingUp';
import TrendingDownIcon from '../icons/TrendingDown';

export interface ListItemProps {
  symbol: string;
  price: number;
  priceDifference: number;
  differencePercentage: number;
}

const ListItem: React.FC<ListItemProps> = ({ symbol, price, priceDifference, differencePercentage }) => {
  return (
    <div className='flex flex-row justify-between py-10'>
      <div className='text-gray-100 font-normal text-xl'>{symbol}</div>
      {priceDifference > 0 && <TrendingUpIcon className='h-13 w-10' />}
      {priceDifference < 0 && <TrendingDownIcon className='h-13 w-10' />}
      <div className='flex flex-col'>
        <div className='text-gray-100 font-normal text-xl place-self-end'>
          <div>${price}</div>
        </div>
        <div className={`flex flex-row space-x-1 font-medium text-base ${priceDifference > 0 ? 'text-green-700' : 'text-red-700'}`}>
          <div>${priceDifference.toFixed(2)}</div>
          <div>({differencePercentage.toFixed(2)}%)</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
