import { heading$ } from '@/services/location';
import { LocationHeadingObject } from 'expo-location';
import { Trans } from 'react-i18next';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useObservable } from '../../util/hooks';
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
  const { value: heading } = useObservable(heading$);
  return (
    <CompassContainer>
      <StyledCompassRose heading={heading?.trueHeading ?? 0} />
      <StyledAngleDebugger heading={heading} />
    </CompassContainer>
  );
}

function AngleDebugger({ heading }: { heading?: LocationHeadingObject }) {
  return (
    <>
      <Text>
        <Trans
          i18nKey="compass.angle"
          components={{ b: <Bold /> }}
          values={heading}
        />
      </Text>
    </>
  );
}

export default Compass;
