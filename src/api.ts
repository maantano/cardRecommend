const BASE_URL = "https:/.coinpaprika.com/v1";

export const fetchCoins = () => {
  // export const fetchCoins = async () => {
  //async  await 방법
  //   const response = await (
  //     await fetch(`https:/.coinpaprika.com/v1/coins/${coinId}`)
  //   ).json();
  //   return response;

  //promise 방법
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
};
export const coinApis = { fetchCoins };
export const outsideClick = () => {
  return false;
  //promise 방법
  // return fetch(`${BASE_URL}/coins`).then((response) => response.json());
};

export const fetchSearchList = () => {
  // export const fetchCoins = async () => {
  //async  await 방법
  //   const response = await (
  //     await fetch(`https:/.coinpaprika.com/v1/coins/${coinId}`)
  //   ).json();
  //   return response;

  //promise 방법
  return fetch(`/search/cardList`).then((response) => response.json());
};

export async function companyApi() {
  const response = await fetch("/company");
  return response.json();
}
