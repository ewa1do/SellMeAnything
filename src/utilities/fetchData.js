import { min } from 'moment';
import { API_URL_TEST } from './config';

// export const fetchData = async (endpoint, limit, skip) => {
export const fetchData = async (endpoint, options) => {
  let baseURL = `${API_URL_TEST}/${endpoint}/${
    options.limit ? '?limit=' + options.limit : ''
  }`;

  if (options.skip) {
    baseURL += baseURL.includes('?')
      ? '&skip=' + options.skip
      : '?skip=' + options.skip;
  }

  const res = await fetch(baseURL);

  const { products } = await res.json();

  const formattedProducts = products.map((prod) => {
    return {
      title: prod.title,
      desc: prod.description,
      url: prod.thumbnail,
      stock: prod.stock,
      price: prod.price,
    };
  });

  return formattedProducts;
};
