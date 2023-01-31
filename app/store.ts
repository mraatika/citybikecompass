import * as R from 'ramda';
import * as Rx from 'rxjs';
import {
  locationPermission$,
  startWatchingHeading,
  startWatchingLocation,
} from './services/location';
import { fetchNearestStations } from './services/stations';

/**
 * Current location
 */
export const location$ = Rx.defer(startWatchingLocation).pipe(
  Rx.skipUntil(locationPermission$.pipe(Rx.filter(R.equals(true)))),
);

/**
 * Current location's coordinates
 */
export const coords$ = location$.pipe(Rx.map(R.prop('coords')));

/**
 * Device heading, updated every 500ms
 */
export const heading$ = Rx.defer(startWatchingHeading).pipe(
  Rx.debounce(() => Rx.interval(500)),
);

/**
 * Nearest citybike stations
 */
export const stations$ = coords$.pipe(
  Rx.switchMap((coords) => fetchNearestStations(coords)),
  Rx.map(R.take<Station>(3)),
);
