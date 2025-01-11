import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  totalInvesting: number;
  change: number;
}

const Header: React.FC<HeaderProps> = ({ totalInvesting, change }) => {
  return (
    <Container>
      <Subtitle>TOTAL INVESTING</Subtitle>
      <RowContainer>
        <Title>${totalInvesting}</Title>
        <Text>{change}%</Text>
      </RowContainer>
      <Line />
    </Container>
  );
};

const Container = styled.div`
  flex: auto;
  flex-direction: column;
  gap: 10px 0px;
  padding: 0px 20px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px 10px;
  align-items: center;
`;

const Subtitle = styled.div`
  font-size: 15px;
  color: #646464;
  font-weight: 700;
`;

const Title = styled.div`
  font-size: 40px;
  color: white;
  font-weight: 700;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #272727;
  margin: 15px 0px;
`;

const Text = styled.div`
  font-size: 16px;
  color: #1d7a34;
  font-weight: 500;
`;

export default Header;
