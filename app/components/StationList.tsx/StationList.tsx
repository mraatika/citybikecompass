import { stations$ } from '@/store';
import { useObservable } from '@/util/hooks';
import * as R from 'ramda';
import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import StationListItem from './StationListItem';

const StyledList = styled.FlatList`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: -8px;
` as unknown as typeof FlatList<Station>;

function StationList() {
  const { value: stations = [] } = useObservable<Station[]>(stations$);

  return (
    <StyledList
      data={stations}
      numColumns={1}
      renderItem={({ item }) => <StationListItem item={item} />}
      keyExtractor={R.prop('stationId')}
    />
  );
}

export default StationList;
