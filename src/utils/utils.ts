import Bgdoodle from '../assets/images/bg-doodle.jpg';
import buyukImage from '../assets/images/buyuk.png';
import carsiImage from '../assets/images/carsi.png';
import getirImage from '../assets/images/getir.png';
import isImage from '../assets/images/is.png';
import n11Image from '../assets/images/n11.png';
import suImage from '../assets/images/su.png';
import yemekImage from '../assets/images/yemek.png';
type ImageName =
  | 'bgDoodle'
  | 'buyuk'
  | 'carsi'
  | 'getir'
  | 'is'
  | 'n11'
  | 'su'
  | 'yemek';
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

    default:
      break;
  }
}
