import axios from 'axios';
import { GOOGLE_MAPS_APIKEY } from '../contants';
import { GeoLocationDetails } from './types';

export const getGeoLocationFromPlaceId = async (placeId: string) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${GOOGLE_MAPS_APIKEY}`;
  try {
    const res = await axios.get(url);
    return res.data.results[0].geometry.location;
  } catch (error) {
    return null;
  }
};

export const getAddressDetailsFromGeoLocatin = async (
  lat: number,
  lng: number,
) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_APIKEY}`;
  try {
    const { data } = await axios.get(url);
    return data.results[0] as GeoLocationDetails;
  } catch (error) {
    return null;
  }
};
