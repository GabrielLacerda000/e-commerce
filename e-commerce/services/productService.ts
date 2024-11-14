import type { UseFetchOptions } from '#app'

export async function uesGetProducts<T>(options: UseFetchOptions<T> = {}){
    return useApi('products', {method:'GET', ...options})
} 

export async function useGetProductById<T>(id: string, options: UseFetchOptions<T> = {}) {
    return useApi(`products/${id}`, {method: 'GET', ...options})
}

export async function useCreateProduct<T>(options: UseFetchOptions<T> = {}) {
    return useApi('products', {method: 'POST', ...options})
}

export async function useUpdateProduct<T>(id: string, options: UseFetchOptions<T> = {}) {
    return useApi(`products/${id}`, {method: 'PUT', ...options})
}

export async function useDeleteProduct<T>(id: string, options: UseFetchOptions<T> = {}) {
    return useApi(`products/${id}`, {method: 'DELETE', ...options})
}
