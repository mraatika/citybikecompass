import { coords$ } from '@/services/location';
import { LocationObjectCoords } from 'expo-location';
import React from 'react';
import { Trans } from 'react-i18next';
import { Text } from 'react-native';
import { useObservable } from '../util/hooks';
import { Bold } from './Typography';

function LocationCoords() {
  const { value: coords } = useObservable<LocationObjectCoords>(coords$);

  return (
    <Text>
      <Trans
        i18nKey="home.location"
        values={{
          lat: coords?.latitude ?? '-',
          lon: coords?.longitude ?? '-',
        }}
        components={{
          b: <Bold />,
        }}
      />
    </Text>
  );
}

export default LocationCoords;
