import React from 'react';

export interface ListItemProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

const ListItem: React.FC<ListItemProps> = ({ symbol, name, price, change }) => {
  return (
    <li>
      <span>{symbol}</span>
      <span>{name}</span>
      <span>${price} {change}%</span>
    </li>
  );
};

export default ListItem;
