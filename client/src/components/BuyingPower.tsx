import React from 'react';
import styled from 'styled-components';

interface BuyingPowerProps {
  buyingPower: number;
}

const BuyingPower: React.FC<BuyingPowerProps> = ({ buyingPower }) => {
  return (
    <Container>
      <ColumnContainer>
          <Subtitle>BUYING POWER</Subtitle>
          <Title>${buyingPower}</Title>     
      </ColumnContainer>
      <Button>Deposit</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Subtitle = styled.div`
  font-size: 15px;
  color: #646464;
  font-weight: 700;
`;

const Button = styled.button`
  border-radius: 100px;
  background-color: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 30px;
  height: 40px;
  font-size: 20px;
  color: white;
  font-weight: 400;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0px;
`;

const Title = styled.div`
  font-size: 25px;
  color: white;
  font-weight: 500;
`;

export default BuyingPower;
