import { api } from "../lib/axios"
import { IProduct } from "../types/product"

async function getProducts (){
  return await api.get<IProduct[]>('/products')
}

async function getProductById(id: string) {
  return await api.get<IProduct>(`/products/${id}`)
}

async function updateProduct(product: IProduct) {
  return await api.put<IProduct>(`/products/${product.id}`, {
    ...product
  })
}

async function createProduct(product: IProduct) {
  return await api.post<IProduct>(`/products/`, {
    ...product,
  })
}

const productRepository = {
  getProducts,
  getProductById,
  updateProduct,
  createProduct
}

export default productRepository