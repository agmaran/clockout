import React from 'react';
import styled from 'styled-components';
import ListItem, { ListItemProps } from './Item';

interface TopMoversProps {
    trending: ListItemProps[];
    topGainers: ListItemProps[];
    topLosers: ListItemProps[];
  }

type TabName = 'trending' | 'topGainers' | 'topLosers';

const TopMovers: React.FC<TopMoversProps> = ({ trending, topGainers, topLosers }) => {
  const [activeTab, setActiveTab] = React.useState<TabName>('trending');

  const handleTabClick = (tab: TabName) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <Title>Top Movers</Title>
      <RowContainer>
        <Button
          className={activeTab === 'trending' ? 'active' : ''}
          onClick={() => handleTabClick('trending')}
        >
          Trending
        </Button>
        <Button
          className={activeTab === 'topGainers' ? 'active' : ''}
          onClick={() => handleTabClick('topGainers')}
        >
          Top Gainers
        </Button>
        <Button
          className={activeTab === 'topLosers' ? 'active' : ''}
          onClick={() => handleTabClick('topLosers')}
        >
          Top Losers
        </Button>
      </RowContainer>
      {activeTab === 'trending' && <ListContainer>
          {trending.map((mover) => (
            <ListItem key={mover.symbol} {...mover} />
          ))}
        </ListContainer>}
      {activeTab === 'topGainers' && <ListContainer>
          {topGainers.map((mover) => (
            <ListItem key={mover.symbol} {...mover} />
          ))}
        </ListContainer>}
      {activeTab === 'topLosers' && <ListContainer>
          {topLosers.map((mover) => (
            <ListItem key={mover.symbol} {...mover} />
          ))}
        </ListContainer>}  
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  background-color: #141414;
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

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export default TopMovers;
