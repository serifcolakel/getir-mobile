import Bgdoodle from '../assets/images/bg-doodle.jpg';
import buyukImage from '../assets/images/buyuk.png';
import carsiImage from '../assets/images/carsi.png';
import getirImage from '../assets/images/getir.png';
import isImage from '../assets/images/is.png';
import n11Image from '../assets/images/n11.png';
import suImage from '../assets/images/su.png';
import yemekImage from '../assets/images/yemek.png';
import slider0 from '../assets/images/0.png';
import slider1 from '../assets/images/1.png';
import slider2 from '../assets/images/2.png';
import slider3 from '../assets/images/3.png';
import slider5 from '../assets/images/5.png';
import slider6 from '../assets/images/6.png';
import slider7 from '../assets/images/7.png';
import slider8 from '../assets/images/8.png';
import homeImage from '../assets/images/home.png';
import workImage from '../assets/images/work.png';
import otherImage from '../assets/images/other.png';
import getirLogo from '../assets/images/getirLogo.png';
type ImageName =
  | 'bgDoodle'
  | 'buyuk'
  | 'carsi'
  | 'getir'
  | 'is'
  | 'n11'
  | 'su'
  | 'yemek'
  | 'routeSlider0'
  | 'routeSlider1'
  | 'routeSlider2'
  | 'routeSlider3'
  | 'routeSlider4'
  | 'routeSlider5'
  | 'routeSlider6'
  | 'routeSlider7'
  | 'routeSlider8'
  | 'home'
  | 'work'
  | 'other'
  | 'getirLogo'
  | string;
export function getImage(name: ImageName) {
  switch (name) {
    case 'bgDoodle':
      return Bgdoodle;
    case 'buyuk':
      return buyukImage;
    case 'carsi':
      return carsiImage;
    case 'getir':
      return getirImage;
    case 'is':
      return isImage;
    case 'n11':
      return n11Image;
    case 'su':
      return suImage;
    case 'yemek':
      return yemekImage;
    case 'routeSlider0':
      return slider0;
    case 'routeSlider1':
      return slider1;
    case 'routeSlider2':
      return slider2;
    case 'routeSlider3':
      return slider3;
    case 'routeSlider4':
      return slider5;
    case 'routeSlider5':
      return slider6;
    case 'routeSlider6':
      return slider7;
    case 'routeSlider7':
      return slider8;
    case 'home':
      return homeImage;
    case 'work':
      return workImage;
    case 'other':
      return otherImage;
    case 'getirLogo':
      return getirLogo;
    default:
      break;
  }
}
type RangeToIntegerArrayProps = {
  start: number;
  end: number;
  step?: number;
};
export function rangeToIntegerArray({
  start,
  end,
  step = 1,
}: RangeToIntegerArrayProps): string[] {
  return Array.from({ length: (end - start) / step + 1 }, (_, i) =>
    (start + i * step).toString(),
  );
}

// TODO: add type definitions for this function
//export function Data<T>({ data, cols }: TableProps<T>) {
export function getArrayToGridArray(data: any[], cols: number) {
  let newData: any[] = [];
  let result: any[][] = [];
  if (data) {
    data.map((item, idx) => {
      if (idx % (cols + 1) === 0) {
        newData = [];
        result.push(newData);
      } else {
        newData.push(item);
      }
    });
  }
  return result;
}

// let newData: T[] = [];
// let result: T[][] = [];

// if (data) {
//   data.map((item, idx) => {
//     if ((idx % cols) + 1 === 0) {
//       newData = [];
//       result.push(newData);
//     } else {
//       newData.push(item);
//     }
//   });
// }
