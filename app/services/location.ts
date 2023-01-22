import {
  LocationAccuracy,
  LocationHeadingObject,
  LocationObject,
  LocationSubscription,
  requestForegroundPermissionsAsync,
  watchHeadingAsync,
  watchPositionAsync,
} from 'expo-location';
import * as R from 'ramda';
import {
  debounce,
  defer,
  filter,
  interval,
  map,
  Observable,
  skipUntil,
} from 'rxjs';

/**
 * Receive updates only when the location has changed by at least this distance in meters
 */
const LOCATION_DISTANCE_TRESHOLD = 5;

/**
 * Permission for using location
 */
const locationPermission$ = defer(requestForegroundPermissionsAsync).pipe(
  map(({ status }) => {
    if (status !== 'granted') {
      throw new Error(
        'PermissonDeniedError: requestForegroundPermissionsAsync() denied',
      );
    }
    return true;
  }),
);

/**
 * Start watching the device position
 */
export const startWatchingLocation = () => {
  return new Observable<LocationObject>((subscriber) => {
    let locationSubscription: LocationSubscription;

    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        distanceInterval: LOCATION_DISTANCE_TRESHOLD,
      },
      subscriber.next.bind(subscriber),
    ).then((s) => (locationSubscription = s));

    return () => locationSubscription.remove();
  });
};

/**
 * Current location
 */
export const location$ = defer(startWatchingLocation).pipe(
  skipUntil(locationPermission$.pipe(filter(R.equals(true)))),
);

/**
 * Current location's coordinates
 */
export const coords$ = location$.pipe(map(R.prop('coords')));

const startWatchingHeading = () => {
  return new Observable<LocationHeadingObject>((subscriber) => {
    let headingSubscription: LocationSubscription;

    watchHeadingAsync(subscriber.next.bind(subscriber)).then(
      (s) => (headingSubscription = s),
    );

    return () => headingSubscription.remove();
  });
};

/**
 * Device heading, updated every 500ms
 */
export const heading$ = defer(startWatchingHeading).pipe(
  debounce(() => interval(500)),
);
