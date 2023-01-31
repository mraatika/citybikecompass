import { heading$, stations$ } from '@/store';
import { useMemo } from 'react';
import styled from 'styled-components/native';
import { useObservable } from '../../util/hooks';
import CompassRose from './CompassRose';
import { getStationLocations } from './model';

const CompassContainer = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const StyledCompassRose = styled(CompassRose)`
  flex: 3;
`;

function Compass() {
  const { value: heading } = useObservable(heading$);
  const { value: stations = [] } = useObservable<Station[]>(stations$);
  const stationLocations = useMemo(
    () => getStationLocations(stations),
    [stations],
  );

  return (
    <CompassContainer>
      <StyledCompassRose
        heading={heading?.trueHeading ?? 0}
        stations={stationLocations}
      />
    </CompassContainer>
  );
}

export default Compass;
