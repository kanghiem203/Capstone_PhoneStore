var BASE_URL = 'https://6652e72e813d78e6d6d68960.mockapi.io/products';

var productService = {
  getListProduct: function() {
    return axios({
      url: BASE_URL,
      method: 'GET',
    });
  },
};