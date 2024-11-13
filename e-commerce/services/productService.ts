import type { UseFetchOptions } from '#app'
import type { Product } from '@/types/Product'

useApi<Product[]>('products', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

export async function getProducts<T>(path: string, options: UseFetchOptions<T> = {}){
    
    return useApi(path, {method:'GET', ...options})
} 

export async function getProductById(id: string) {
    return useApi<Product>(`products/${id}`)
}

export async function createProduct(product: Partial<Product>) {
    return useApi<Product>('products', {
    method: 'POST',
    body: product,
    })
}

export async function updateProduct(id: string, updatedData: Partial<Product>) {
    return useApi<Product>(`products/${id}`, {
    method: 'PUT',
    body: updatedData,
    })
}

export async function deleteProduct(id: string) {
    return useApi<void>(`products/${id}`, {
    method: 'DELETE',
    })
}
