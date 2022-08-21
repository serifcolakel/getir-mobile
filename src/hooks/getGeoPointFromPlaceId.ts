import axios from 'axios';
import { GOOGLE_MAPS_APIKEY } from '../contants';

export const getGeoLocationFromPlaceId = async (placeId: string) => {
  console.log('placeId', placeId);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${GOOGLE_MAPS_APIKEY}`;
  try {
    const res = await axios.get(url);
    return res.data.results[0].geometry.location;
  } catch (error) {
    console.log(error);
  }
};

export const getAddressDetailsFromGeoLocatin = async (
  lat: number,
  lng: number,
) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_APIKEY}`;
  try {
    const res = await axios.get(url);
    return res.data.results[0].formatted_address;
  } catch (error) {
    console.log(error);
  }
};
