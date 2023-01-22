import { startWatchingHeading } from '@/services/location';
import { LocationHeadingObject, LocationSubscription } from 'expo-location';
import { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Bold } from '../Typography';
import CompassRose from './CompassRose';

const CompassContainer = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const StyledCompassRose = styled(CompassRose)`
  flex: 3;
`;

const StyledAngleDebugger = styled(AngleDebugger)`
  flex: 1;
`;

function Compass() {
  const [heading, setHeading] = useState<LocationHeadingObject>();

  useEffect(() => {
    let handler: LocationSubscription;

    (async function run() {
      handler = await startWatchingHeading(setHeading);
    })();

    return () => {
      handler?.remove();
    };
  }, []);

  return (
    <CompassContainer>
      <StyledCompassRose heading={heading?.trueHeading ?? 0} />
      <StyledAngleDebugger heading={heading} />
    </CompassContainer>
  );
}

function AngleDebugger({ heading }: any) {
  return (
    <>
      <Text>
        <Trans
          i18nKey="compass.angle"
          components={{ b: <Bold /> }}
          values={{ angle: 0 }}
        />
      </Text>
      <Text>{JSON.stringify(heading)}</Text>
    </>
  );
}

export default Compass;
