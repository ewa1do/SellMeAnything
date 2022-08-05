export const fetchData = async (endpoint) => {
  const res = await fetch(
    `https://dummyjson.com/${endpoint}?limit=5`
  );

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

  console.log(formattedProducts);
  return formattedProducts;
};
