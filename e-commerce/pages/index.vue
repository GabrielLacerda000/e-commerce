<script setup lang="ts">
import type { Product } from '@/types/Product'
import { uesGetProducts } from '~/services/productService'

const { data: products, error } = await uesGetProducts<Product[]>()

</script>

<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Products</h1>
  
      <!-- <div v-if="isLoading" class="text-center">Carregando produtos...</div> -->
  
      <div v-if="error" class="text-center text-red-500">An error occurred while fetching products.</div>
  
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="product in products" :key="product.id" class="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <!-- <img :src="product.image_url" alt="product.name" class="w-full h-48 object-cover mb-2 rounded" /> -->
          <NuxtLink :to="`/product/${product.id}`" class="text-lg text-blue-900 font-semibold hover:text-blue-500 transition">{{ product.name }}</NuxtLink>
          <p class="text-gray-600">{{ product.description }}</p>
          <p class="text-blue-600 font-bold">R$ {{ product.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </template>