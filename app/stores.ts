import { LocationObject } from 'expo-location';
import { atom } from 'jotai';

export const locationAtom = atom<LocationObject | undefined>(undefined);
export const coordsAtom = atom((get) => get(locationAtom)?.coords);
