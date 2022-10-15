const service = {
  async getData() {
    return await fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => json);
  },
};

export default service;
