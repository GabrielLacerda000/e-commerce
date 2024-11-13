  
<script setup>
  const isMenuOpen = ref(false);
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>

<template>
    <nav class="bg-white border-b border-gray-200">
      <div class="container mx-auto flex items-center justify-between p-4">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl font-bold text-blue-600">MyShop</NuxtLink>
  
        <!-- Links de navegação -->
        <div class="hidden md:flex space-x-6">
          <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-blue-600">About</NuxtLink>
          <NuxtLink to="/product/create" class="hover:text-blue-600">Create</NuxtLink>
        </div>
  
        <!-- Barra de busca e ícone de carrinho -->
        <div class="flex items-center space-x-4">
          <!-- Campo de busca -->
          <input
            type="text"
            placeholder="Search"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
  
          <!-- Ícone do carrinho -->
          <NuxtLink to="/cart" class="relative">
            <span
              class="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2"
            >0</span>
            <Icon name="mdi:cart" size="40px" />
          </NuxtLink>
        </div>
  
        <!-- Menu Mobile -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Menu Mobile - Dropdown -->
      <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-gray-200">
        <div class="flex flex-col p-4 space-y-2">
          <NuxtLink to="/" class="hover:text-blue-600" @click="toggleMenu">Home</NuxtLink>
          <NuxtLink to="/shop" class="hover:text-blue-600" @click="toggleMenu">Shop</NuxtLink>
          <NuxtLink to="/about" class="hover:text-blue-600" @click="toggleMenu">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-blue-600" @click="toggleMenu">Contact</NuxtLink>
        </div>
      </div>
    </nav>
  </template>