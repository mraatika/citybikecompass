interface Edge {
  node: {
    distance: number;
    place: Omit<Station, 'distance'>;
  };
}

/**
 * Station interface represents the citybike rental station
 */
interface Station {
  allowDropoff: boolean;
  bikesAvailable: number;
  distance: number;
  lat: number;
  lon: number;
  name: string;
  spacesAvailable: number;
  stationId: string;
}

interface Coords {
  lat: number;
  lon: number;
}
