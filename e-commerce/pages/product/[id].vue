<script setup lang="ts">
import { useApi } from '~/composables/useApi'
import type { Product } from '~/types/Product'

const route = useRoute()

const productId = route.params.id as string

const { data: product, error } = useApi<Product>(`products/${productId}`)
console.log(product)

onMounted(() => {
  if (error.value) {
    console.log(error.value)
    navigateTo('/404')
  }
})
</script>

<template>
    <div>
      <h1 class="text-3xl text-center font-bold mb-4">Product Details</h1>
  
      <!-- <div v-if="error" class="text-center text-red-500">
        Error while loading product: {{ error.message }}
      </div> -->

      <div v-if="!product" class="text-center text-red-500">
        Product not found.
      </div>
  
      <div v-else class="flex flex-col justify-center items-center">
        <div class="bg-white w-1/2 flex flex-col justify-center items-center p-5">
            <h2 class="text-xl font-semibold mb-3">Name: {{ product.name }}</h2>
            <!-- <img :src="product.image_url" alt="product.name" class="w-full h-48 object-cover mb-2 rounded" /> -->
            <p class="text-gray-600 font-bold mb-3">Description: {{ product.description }}</p>
            <p class="text-blue-600 font-bold mb-3"> Price: $ {{ product.price.toFixed(2) }}</p>
            <p class="text-blue-600 font-bold mb-3"> Stock: {{ product.stock }}</p>
            <div class="mt-4">
              <NuxtLink :to="`/product/edit/${product.id}`" class="bg-blue-500 p-3 rounded-md hover:bg-blue-400 transition">Editar Produto</NuxtLink>
            </div>
          </div>
      </div>
    </div>
</template>
  