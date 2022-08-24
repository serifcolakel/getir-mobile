import axios from 'axios';
export type RouteName =
  | 'favorite'
  | 'categories'
  | 'atistirmalik'
  | 'bebek'
  | 'cards'
  | 'cinselSaglik'
  | 'discount'
  | 'dondurma'
  | 'evyasam'
  | 'evcilHayvan'
  | 'firindan'
  | 'footerLink'
  | 'kahvaltilik'
  | 'kisiselbakim'
  | 'suicecek'
  | 'kisiselbakim'
  | 'suturunleri'
  | 'newItem'
  | 'sliderData'
  | 'kisiselbakim'
  | 'meyvesebze'
  | 'teknoloji'
  | 'temelgida'
  | 'yiyecek'
  | 'campaings'
  | 'urunler'
  | 'kampanyaWithCode';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.7:3000/api/',
  timeout: 5000,
});
// function getLocalAccessToken() {
//  const accessToken = localStorage.getItem("token");
//   return "accessToken";
// }
axiosInstance.interceptors.request.use(
  config => {
    // CHECK THE SOMETHING SECTION
    // const token = getLocalAccessToken();
    // if (token && config.headers.common) {
    //   config.headers.common["Authorization"] = token;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
export default axiosInstance;

export async function useAxios(path: RouteName) {
  const res = await axiosInstance.get(path);
  return res.data;
}
