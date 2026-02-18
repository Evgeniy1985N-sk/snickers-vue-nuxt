import type { ProductsResponse } from "~/types/Product";

export async function useFetchData(page: number = 1, limit: number = 12) {
  try {
    return await $fetch<ProductsResponse>(
      `https://test-task-api.tapir.ws/products?page=${page}&limit=${limit}`
    );
  } catch (e) {
    console.error("Error fetching", e);
    throw e;
  }
}