import { GooglePlaceData } from 'react-native-google-places-autocomplete';

export interface Adresses {
  type: 'home' | 'work' | 'other';
  data: GooglePlaceData;
}

export type User = {
  id: string;
  name: string;
  token: string;
};
