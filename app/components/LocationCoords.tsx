import { useAtomValue } from 'jotai';
import React from 'react';
import { Trans } from 'react-i18next';
import { Text } from 'react-native';
import { coordsAtom } from '../stores';
import { Bold } from './Typography';

function LocationCoords() {
  const coords = useAtomValue(coordsAtom);
  return (
    <Text>
      <Trans
        i18nKey="home.location"
        values={{
          lat: coords?.latitude ?? 'n/a',
          lon: coords?.longitude ?? 'n/a',
        }}
        components={{
          b: <Bold />,
        }}
      />
    </Text>
  );
}

export default LocationCoords;
