import { API_URL_TEST } from './config';
import { v4 as uuid } from 'uuid';

export const fetchData = async (
  url = API_URL_TEST,
  endpoint,
  options
) => {
  let baseURL = `${url}/${endpoint}/${
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
      id: prod.id,
    };
  });

  return formattedProducts;
};
