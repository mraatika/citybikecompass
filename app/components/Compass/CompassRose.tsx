import Svg, { Circle, Text, Path } from 'react-native-svg';
import styled from 'styled-components/native';

interface CompassRoseProps {
  heading: number;
}

const RoseSvg = styled(Svg)`
  height: 100%;
  width: 100%;
  ${({ rotation }) => `transform: rotateZ(${rotation}deg);`}
`;

function calculateRotationFromHeading(heading: number) {
  return heading;
}

function CompassRose({ heading }: CompassRoseProps) {
  const rotation = calculateRotationFromHeading(heading);

  return (
    <RoseSvg viewBox="0 0 100 100" rotation={rotation}>
      <Circle cx="50" cy="50" r="35" stroke="none" fill="white" />

      <Path
        fill="#d40000"
        stroke="none"
        d="m 44,15 h 11.480923 l -5.74046,13.337845 z"
      />

      <Text x="47" y="8" fill="#000" fontSize={10} fontWeight="bold">
        P
      </Text>

      <Circle
        cx="50"
        cy="50"
        r="35"
        stroke="#000"
        strokeWidth="4"
        fill="none"
      />

      <Circle cx="50" cy="50" r="4" stroke="none" fill="black" />
    </RoseSvg>
  );
}

export default CompassRose;
