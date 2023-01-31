/**
 * Transform distance to a human readable form. This is just a way to make sure
 * that uniform way is used to postfix the distance with unit.
 * @param distance
 * @returns
 */
export function distanceToString(distance: number) {
  return `${distance} m`;
}
