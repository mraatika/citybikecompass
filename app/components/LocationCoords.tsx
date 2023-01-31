import { coords$, heading$ } from '@/store';
import { LocationObjectCoords } from 'expo-location';
import React from 'react';
import { Trans } from 'react-i18next';
import { Text, View } from 'react-native';
import { useObservable } from '../util/hooks';
import { Bold } from './Typography';

function LocationCoords() {
  const { value: heading } = useObservable(heading$);
  const { value: coords } = useObservable<LocationObjectCoords>(coords$);

  return (
    <View>
      <Text>
        <Trans
          i18nKey="compass.angle"
          components={{ b: <Bold /> }}
          values={heading}
        />
      </Text>

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
    </View>
  );
}

export default LocationCoords;
