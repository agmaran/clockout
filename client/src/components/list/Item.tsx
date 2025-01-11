import React from 'react';
import styled from 'styled-components';

export interface ListItemProps {
  T: string;
  c: number;
  h: number;
  l: number;
  n: number;
  o: number;
  t: number;
  v: number;
  vw: number;
}

const ListItem: React.FC<ListItemProps> = ({ T, c, h, l, n, o, t, v, vw }) => {
  return (
    <Container>
        <ColumnContainer>
          <Symbol>{T}</Symbol>
        </ColumnContainer>
        <RightColumnContainer>
          <Symbol>${c}</Symbol>
          <Text>{(c - o) * o / 100}%</Text>
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
