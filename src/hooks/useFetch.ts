export async function useFetch(path: string) {
  let baseUrl = 'https://getir-api-clone.herokuapp.com/api/';
  const res = await fetch(baseUrl + path);
  const data = await res.json();
  return data;
}
