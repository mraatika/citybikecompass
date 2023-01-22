import 'intl-pluralrules';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Compass from './components/Compass';
import LocationCoords from './components/LocationCoords';
import './i18n';

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
