import {
  LocationAccuracy,
  LocationHeadingObject,
  LocationObject,
  LocationSubscription,
  requestForegroundPermissionsAsync,
  watchHeadingAsync,
  watchPositionAsync,
} from 'expo-location';
import * as Rx from 'rxjs';

/**
 * Receive updates only when the location has changed by at least this distance in meters
 */
const LOCATION_DISTANCE_TRESHOLD = 5;

/**
 * Permission for using location
 */
export const locationPermission$ = Rx.defer(
  requestForegroundPermissionsAsync,
).pipe(
  Rx.map(({ status }) => {
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
  return new Rx.Observable<LocationObject>((subscriber) => {
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

export const startWatchingHeading = () => {
  return new Rx.Observable<LocationHeadingObject>((subscriber) => {
    let headingSubscription: LocationSubscription;

    watchHeadingAsync(subscriber.next.bind(subscriber)).then(
      (s) => (headingSubscription = s),
    );

    return () => headingSubscription.remove();
  });
};
