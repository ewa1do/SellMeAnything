import { API_URL_TEST } from './config';

export const fetchData = async (endpoint, limit) => {
  const baseURL = `${API_URL_TEST}/${endpoint}/${
    limit ? '?limit=' + limit : ''
  }`;

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
