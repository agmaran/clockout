import React from 'react';
import styled from 'styled-components';
import WatchListItem, { ListItemProps } from './Item';

interface WatchListProps {
  items: ListItemProps[];
}

const WatchList: React.FC<WatchListProps> = ({ items }) => {
  return (
    <Container>
      <Title>Watchlist</Title>
      <ListContainer>
        {items.map(item => (
          <WatchListItem key={item.symbol} {...item} />
        ))}
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 20px;
  background-color: #242424;
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 22px;
  color: white;
  font-weight: 500;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  margin-top: 35px;
`;

export default WatchList;
