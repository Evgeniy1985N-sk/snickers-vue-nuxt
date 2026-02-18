export interface Product {
  id: number
  image: string
  price: number
  name: string
}

export interface ProductsResponse {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  products: Product[];
}