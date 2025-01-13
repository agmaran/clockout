import React from 'react';
import {ListItemProps} from './list/Item';

interface HeaderProps {
  totalInvesting: number;
  items: ListItemProps[] | undefined;
}

const Header: React.FC<HeaderProps> = ({ totalInvesting, items }) => {
  const [ profit, setProfit ] = React.useState<number>();
  const [ profitPercentage, setProfitPercentage] = React.useState<number>();

  React.useEffect(() => {
    let profit = 0;
    let profitPercentage = 0;
    if (items) {
      for (const item of items) {
        profit += item.priceDifference;
        profitPercentage += item.differencePercentage;
      }
      setProfit(profit);
      setProfitPercentage(profitPercentage);
    }
  }, [items]);

  return (
    <div className='flex flex-col bg-gray-950 p-10 md:p-20'>
      <div className='text-gray-500 font-medium text-base'>TOTAL INVESTING</div>
      <div className='text-gray-100 font-semibold text-5xl my-2'>${totalInvesting.toFixed(2)}</div>
      {profit && <div className={`flex flex-row space-x-1 font-medium text-base ${profit > 0 ? 'text-green-700' : 'text-red-700'}`}>
        <div className=''>${profit.toFixed(2)}</div>
        <div>({profitPercentage?.toFixed(2)})%</div>
      </div>}
    </div>
  );
};

export default Header;
