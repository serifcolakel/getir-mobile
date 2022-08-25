import * as geolib from 'geolib';
export type GeoLocation = {
  lat: number;
  lng: number;
};
type Unit = 'sm' | 'mi' | 'nm' | 'yd' | 'ft' | 'cm' | 'mm' | 'm' | 'km';

type getSingleDestinationDistanceProps = {
  start: GeoLocation;
  end: GeoLocation;
  unit?: Unit;
};
export const getSingleDestinationDistance = async ({
  start,
  end,
  unit = 'km',
}: getSingleDestinationDistanceProps) => {
  let distance = geolib.getDistance(
    { lat: start.lat, lon: start.lng },
    { lat: end.lat, lon: end.lng },
  );

  distance = await geolib.convertDistance(distance, 'km');

  return distance.toFixed(2).toString();
};
