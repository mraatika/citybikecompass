import * as R from 'ramda';

export const getStationLocations = R.map<Station, Coords>(
  R.pick(['lat', 'lon']),
);
