import React from 'react';

interface HeaderProps {
  totalInvesting: number;
  change: number;
}

const Header: React.FC<HeaderProps> = ({ totalInvesting, change }) => {
  return (
    <header>
      <h2>TOTAL INVESTING</h2>
      <p>${totalInvesting} <span>{change}%</span></p>
    </header>
  );
};

export default Header;
