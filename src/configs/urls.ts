const urls = {
  api: {
    baseUrl: "https://fakestoreapi.com",
    products: "/products",
    productByName: (name: string) => `/products/${name}`,
    categories: "/products/categories",
    categoryByName: (name: string) => `/products/category/${name}`,
  },
};

export default urls;
