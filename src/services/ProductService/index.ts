import ApiService from "../ApiService";

class ProductService {
  constructor() {}

  // Product Listesini getiren api
  getProductList() {
    return ApiService.fetch({
      method: "GET",
      url: `/api/collections/ozkamci_katalog/records`,
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();
