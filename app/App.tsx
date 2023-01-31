import 'intl-pluralrules';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Compass from './components/Compass';
import LocationCoords from './components/LocationCoords';
import StationList from './components/StationList.tsx/StationList';
import './i18n';

const MainView = styled.View`
  height: 100%;
  background-color: turquoise;
`;

const CompassBlock = styled.View`
  height: 50%;
  padding: 0 40px;
  margin-top: 20px;
`;

const ListBlock = styled.View`
  height: 30%;
  margin: 20px 10px;
`;

const LocationBar = styled.View`
  height: 10%;
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

        <ListBlock>
          <StationList />
        </ListBlock>

        <LocationBar>
          <LocationCoords />
        </LocationBar>
      </MainView>
    </SafeAreaView>
  );
};

export default App;
