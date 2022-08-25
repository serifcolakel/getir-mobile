import { getImage } from '../utils/utils';
export const GOOGLE_MAPS_APIKEY = 'AIzaSyAk1VUyA3QjvvCsixKUwFr9ptSXFNNfzms';
export const dummyData = [
  {
    title: 'Anise Aroma Art Bazar',
    url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 1,
  },
  {
    title: 'Food inside a Bowl',
    url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 2,
  },
  {
    title: 'Vegatable Salad',
    url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 3,
  },
];
type AdressesLinkTypes = {
  type: 'home' | 'work' | 'other';
  id: number;
  label: string;
  image: any;
  route: string;
};
export const AdressesLink: AdressesLinkTypes[] = [
  {
    id: 1,
    label: 'Ev Adresi Ekle',
    image: getImage('home'),
    route: 'NewAddresses',
    type: 'home',
  },
  {
    id: 2,
    label: 'İş Adresi Ekle',
    image: getImage('work'),
    route: 'NewAddresses',
    type: 'work',
  },
  {
    id: 3,
    label: 'Diğer Adres Ekle',
    image: getImage('other'),
    route: 'NewAddresses',
    type: 'other',
  },
];

export const getirBranchAddresses = [
  {
    lat: 41.015137,
    lng: 28.97953,
  },
  {
    lat: 41.015137,
    lng: 28.97953,
  },
];
