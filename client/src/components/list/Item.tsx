import React from 'react';
import styled from 'styled-components';

export interface ListItemProps {
  symbol: string;
  price: number;
  priceDifference: number;
  differencePercentage: number;
}

const ListItem: React.FC<ListItemProps> = ({ symbol, price, priceDifference, differencePercentage }) => {
  return (
    <Container>
        <ColumnContainer>
          <Symbol>{symbol}</Symbol>
        </ColumnContainer>
        <RightColumnContainer>
          <Symbol>${price}</Symbol>
          <Container>
            <Text>${priceDifference}</Text>
            <Text>({differencePercentage}%)</Text>
          </Container>
        </RightColumnContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-size: 16px;
  color: #1d7a34;
  font-weight: 500;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const RightColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
`;

const Symbol = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

export default ListItem;
