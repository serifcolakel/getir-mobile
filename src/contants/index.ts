import { getImage } from '../utils/utils';

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

export const AdressesLink = [
  {
    id: 1,
    label: 'Ev Adresi Ekle',
    image: getImage('routeSlider0'),
    route: 'NewAddresses',
  },
  {
    id: 2,
    label: 'İş Adresi Ekle',
    image: getImage('routeSlider0'),
    route: 'NewAddresses',
  },
  {
    id: 3,
    label: 'Diğer Adres Ekle',
    image: getImage('routeSlider0'),
    route: 'NewAddresses',
  },
];
