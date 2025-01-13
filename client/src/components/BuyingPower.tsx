import React from 'react';
interface BuyingPowerProps {
  buyingPower: number;
}

const BuyingPower: React.FC<BuyingPowerProps> = ({ buyingPower }) => {
  return (
    <div className='flex flex-row p-10 md:p-20'>
      <div className='flex flex-col'>
          <div className='text-gray-500 font-medium text-base'>BUYING POWER</div>
          <div className='text-gray-100 font-medium text-2xl my-2'>${buyingPower}</div>     
      </div>
    </div>
  );
};

export default BuyingPower;
