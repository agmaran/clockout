import React from 'react';

interface BuyingPowerProps {
  buyingPower: number;
}

const BuyingPower: React.FC<BuyingPowerProps> = ({ buyingPower }) => {
  return (
    <div className="buying-power">
      <p>BUYING POWER</p>
      <p>${buyingPower}</p>
      <button>Deposit</button>
    </div>
  );
};

export default BuyingPower;
