import * as Location from 'expo-location';
import { LocationAccuracy } from 'expo-location';

/**
 * Receive updates only when the location has changed by at least this distance in meters
 */
const LOCATION_DISTANCE_TRESHOLD = 5;

async function requestLocationPermission() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error(
      'PermissonDeniedError: requestForegroundPermissionsAsync() denied',
    );
  }

  return true;
}

export async function getLocation() {
  try {
    await requestLocationPermission();
    return Location.getCurrentPositionAsync({
      accuracy: LocationAccuracy.Highest,
      distanceInterval: LOCATION_DISTANCE_TRESHOLD,
    });
  } catch (e) {
    console.error(e);
  }
}
