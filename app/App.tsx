import 'intl-pluralrules';
import './i18n';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, StatusBar } from 'react-native';
import LocationCoords from './components/LocationCoords';
import { getLocation } from './services/location';
import { locationAtom } from './stores';
import Compass from './components/Compass';

const MainView = styled.View`
  height: 100%;
`;

const CompassBlock = styled.View`
  flex: 1;
  padding: 20px 40px;
  background-color: turquoise;
`;

const LocationBar = styled.View`
  align-items: center;
  margin: 20px 0;
`;

const App = () => {
  const [, setLocation] = useAtom(locationAtom);

  useEffect(() => {
    (async function run() {
      const loc = await getLocation();
      setLocation(loc);
    })();
  }, [setLocation]);

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <MainView>
        <CompassBlock>
          <Compass />
        </CompassBlock>

        <LocationBar>
          <LocationCoords />
        </LocationBar>
      </MainView>
    </SafeAreaView>
  );
};

export default App;
