<script setup lang="ts">
import { useApi } from '~/composables/useApi'
import type { Product } from '~/types/Product'

const route = useRoute()

const productId = route.params.id 

const { data: product } = useApi<Product>(`products/${productId}`)

// const productData: Product = ref({
//     id: route.params.id,
//     name: '',
//     description: '',
//     price: 0
// })

const updateProduct = async () => {
  try {
    await useApi<Product>(`/products/${productId}`, {
      method: 'PUT',
      body: {
        name: product.name,
        description: product.description,
        price: product.price,
      },
    })
    navigateTo(`/product/${productId}`)
  } catch (err) {
    console.error('Erro updating product:', err)
  }
}
</script>

<template>
    <div>
        <h1 class="text-3xl text-center font-bold mb-4 border-b-2 ">Edit Product</h1>

      <div v-if="!product" class="text-center text-red-500">
        Product not found.
      </div>
  
      <div v-else class="flex flex-col justify-center items-center">
        <div class="rounded-md p-5 bg-white">
            <form @submit.prevent="updateProduct">
            <div class="mb-4">
                <label for="name" class="block text-sm font-semibold">Name:</label>
                <input v-model="product.name" id="name" class="bg-neutral-300 p-3 rounded-md w-full" type="text" required />
            </div>
  
            <div class="mb-4">
                <label for="description" class="block text-sm font-semibold">Description:</label>
                <textarea v-model="product.description" id="description" class="bg-neutral-300 p-3 rounded-md w-full" required></textarea>
            </div>
    
            <div class="mb-4">
                <label for="price" class="block text-sm font-semibold">Price:</label>
                <input v-model="product.price" id="price" class="bg-neutral-300 rounded-md p-3" type="number" required />
            </div>

            <div class="mb-4">
                <label for="price" class="block text-sm font-semibold">Stock:</label>
                <input v-model="product.stock" id="price" class="bg-neutral-300 rounded-md p-3" type="number" required />
            </div>
  
            <div class="mt-4 flex justify-center">
                <button type="submit" class="bg-blue-500 rounded-md p-3 w-full hover:bg-blue-400 transition">Save</button>
            </div>
        </form>
        </div>
      </div>
    </div>
</template>