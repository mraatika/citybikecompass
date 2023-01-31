import { distanceToString } from '@/util';
import React from 'react';
import styled from 'styled-components/native';

interface StationListItemProps {
  item: Station;
}

const StyledListItem = styled.View`
  padding: 20px 20px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
`;

const StationName = styled.Text`
  flex: 3;
  font-weight: 500;
`;

const Availability = styled.Text`
  flex: 1;
`;

const Distance = styled.Text`
  flex: 1;
  text-align: right;
`;

function StationListItem({ item }: StationListItemProps) {
  return (
    <StyledListItem>
      <StationName>{item.name}</StationName>
      <Availability>{`${item.bikesAvailable}/${item.spacesAvailable}`}</Availability>
      <Distance>{distanceToString(item.distance)}</Distance>
    </StyledListItem>
  );
}

export default StationListItem;
