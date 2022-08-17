import Bgdoodle from '../assets/images/bg-doodle.jpg';
type ImageName = 'bgDoodle';
export function getImage(name: ImageName) {
  switch (name) {
    case 'bgDoodle':
      return Bgdoodle;

    default:
      break;
  }
}
