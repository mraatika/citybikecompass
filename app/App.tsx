import 'intl-pluralrules';
import './i18n/index';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import LocationCoords from './components/LocationCoords';
import { getLocation } from './services/location';
import { locationAtom } from './stores';
import styled from 'styled-components/native';

const LocationBar = styled.View`
  align-items: center;
  padding: 20px;
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
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <LocationBar>
          <LocationCoords />
        </LocationBar>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
