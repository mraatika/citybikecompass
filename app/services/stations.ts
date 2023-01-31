import { LocationObjectCoords } from 'expo-location';
import * as R from 'ramda';
import * as Rx from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import query from './station_query';

/**
 * Parse response from digitransit api
 * @param result
 * @returns
 */
const parseAndSortResponse = R.pipe(
  R.pathOr([], ['data', 'nearest', 'edges']),
  R.map(({ node }: Edge) => ({ ...node.place, distance: node.distance })),
  R.sortBy(R.prop('distance')),
);

/**
 * Form graphql query for request body
 * @private
 * @param coords
 * @returns
 */
function formRequestBody({ latitude, longitude }: LocationObjectCoords) {
  return {
    query: query,
    variables: {
      latitude,
      longitude,
    },
  };
}

/**
 * Fetch nearest departures from digitransit's public api
 * @param coords
 * @returns
 */
export function fetchNearestStations(coords: LocationObjectCoords) {
  return fromFetch(
    'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formRequestBody(coords)),
    },
  ).pipe(
    Rx.switchMap((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      return response.json();
    }),
    Rx.map(parseAndSortResponse),
  );
}
