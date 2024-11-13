<script setup lang="ts">
import type { Product } from '@/types/Product'
import { useApi } from '~/composables/useApi';
import { getProducts } from '~/services/productService';

const { data: products, error } = useApi<Product[]>('products', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
});
// const products = ref<Product[]>([])
// const loading = ref(true)
// let error = ref<string | null>(null)

// onMounted(async () => {
    
//     try {
//     loading.value = true
//     const { data, error } = await getProducts<Product[]>('products')
    
//     if (error) {
//       error.value = 'An error occurred while fetching products.'
//     } else {
//       products.value = data ?? []
//     }
//   } catch (err) {
//     error.value = 'An error occurred while fetching products.'
//     console.error(err)
//   } finally {
//     loading.value = false
//   }
// })

</script>

<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Products</h1>
  
      <!-- <div v-if="isLoading" class="text-center">Carregando produtos...</div> -->
  
      <div v-if="error" class="text-center text-red-500">An error occurred while fetching products.</div>
  
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="product in products" :key="product.id" class="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <!-- <img :src="product.image_url" alt="product.name" class="w-full h-48 object-cover mb-2 rounded" /> -->
          <NuxtLink :to="`/product/edit/${product.id}`" class="text-lg text-blue-900 font-semibold hover:text-blue-500 transition">{{ product.name }}</NuxtLink>
          <p class="text-gray-600">{{ product.description }}</p>
          <p class="text-blue-600 font-bold">R$ {{ product.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </template>