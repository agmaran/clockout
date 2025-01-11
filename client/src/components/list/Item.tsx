import React from 'react';
import styled from 'styled-components';

export interface ListItemProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

const ListItem: React.FC<ListItemProps> = ({ symbol, name, price, change }) => {
  return (
    <Container>
        <ColumnContainer>
          <Symbol>{symbol}</Symbol>
          <Name>{name}</Name>
        </ColumnContainer>
        <RightColumnContainer>
          <Symbol>${price}</Symbol>
          <Text>{change}%</Text>
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

const Name = styled.div`
  color: #646464;
  font-size: 14px;
  font-weight: 400;
`;

export default ListItem;
